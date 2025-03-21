import React from "react";
import { Link } from "react-router-dom";

const AuthButton = ({label, onClick, to}) => {
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