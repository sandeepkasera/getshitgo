export default function ProfilePage({params}: any) {
    return (
        <div className="className flex">
            <h1>
                ProfilePage
            </h1>
            <p>Hi {params.user}</p>
        </div>
    )
}