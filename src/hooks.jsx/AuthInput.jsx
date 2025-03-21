const AuthInput = ({type, placeholder, onChange}) => {
    return (
        <input className = "w-full p-5 rounded-lg font-medium text-black focus:outline-none"
                        style={{ backgroundColor: "#FAFBFD" }} 
                        type={type} 
                        placeholder={placeholder} 
                        onChange={onChange}
                    />
    )
}

export default AuthInput;