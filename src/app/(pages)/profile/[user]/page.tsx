export default function ProfilePage({params}: any) {
    return (
        <div className="className flex">
            <h1>
                ProfilePage{params.user}
            </h1>
        </div>
    )
}