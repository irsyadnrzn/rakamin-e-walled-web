import { Link } from "react-router-dom";

const LoginInput = () => {
    
    const handleLogin = () => {
        alert("Login Clicked");
        // Perform login logic here
      };

    return (
        <div className="flex justify-center items-center h-screen"> 
            <div className="bg-white p-8 rounded-lg w-140 text-cente">
                <div className="flex justify-center mb-20">
                    <img className = 'h-20' src="ewalled.png" alt="ewalled" />
                </div>

                <div className="flex flex-col space-y-6">
                    <input className = "w-full p-5 rounded-lg font-medium text-black focus:outline-none"
                        style={{ backgroundColor: "#FAFBFD" }} 
                        type="email" 
                        placeholder="Masukkan Email" 
                    />
                    <input className = "w-full p-5 rounded-lg font-medium text-black focus:outline-none"
                        style={{ backgroundColor: "#FAFBFD" }} 
                        type="password" 
                        placeholder="Masukkan Password" 
                    />
                </div>
                
                <div className="mt-12 bg-blue-600 shadow-xl hover:bg-blue-700 rounded-xl">
                    <AuthButton label="Login" onClick={handleLogin} />
                    {/* <button className="w-full py-5 text-white font-semibold">Login</button> */}
                </div>

                <div className="mx-auto flex space-x-2 mt-12 font-semibold">
                    <p>Belum punya akun?</p>
                    <Link to = "/register"><p className="text-blue-500">Daftar disini</p></Link>
                </div>
            </div>
        </div>
    )
}

export default LoginInput;