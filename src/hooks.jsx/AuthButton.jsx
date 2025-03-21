import React from "react";

const AuthButton = ({label, onClick}) => {
    return(
        <div>
            <button
                className="w-full py-5 text-white font-semibold"
                onClick={onClick}
            >{label}</button>
        </div>
    )
}

export default AuthButton;