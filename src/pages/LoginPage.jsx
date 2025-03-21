import LoginInput from "../components/LoginInput";

const LoginPage = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/2"> 
                <LoginInput/>
            </div>
            <div className="w-1/2">
                <img className = "w-full h-full object-cover" 
                 src="login-image.png" 
                 alt="e-walled" 
                />
            </div>
        </div>
    )
    
}

export default LoginPage;