"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    
    const onLogin = async () => {
        try {
           setLoading(true);
           const response = await axios.post("/api/users/login", user);
           console.log("Login Success", response.data);
           router.push(`/profile/${response.data.user}`)
        } catch (error: any) {
            console.log("Login Failed", error.message);
            
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])
    return (
        <div className="className flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="className text-center">{loading ? "Processing": "Login"}</h1><hr/>
            <label htmlFor="email">Email</label>
            <input 
                id="email"
                type="email"
                className="text-black"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
                />
            <label htmlFor="password">Password</label>
            <input 
                id="password"
                type="password"
                className="text-black"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                />
            <button onClick={onLogin} className="p-2 border">Login Here</button>
            <Link href="/signup" >Visit Signup Page</Link>
        </div>
    )
}