import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()


export async function POST(request: NextRequest) {

    try {        
        console.log("API CALLED");
        
        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        // check if user exists
        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }

        // check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword) {
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        // create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        // create token
        console.log("token", process.env.TOKEN_SECRET)
        const token_secret = process.env.TOKEN_SECRET
        if (!token_secret) {
            throw new Error("TOKEN_SECRET environment variable is not set");
        }
        const token = await jwt.sign(tokenData, token_secret, { expiresIn: "1h"})
        const response = NextResponse.json({
            message: "Login Successful",
            user: user.username,
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, 
            {status:500}
        )
    }

}