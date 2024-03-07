import React from "react";
import myLogo from "../Img/logo.png"
import "../Style/Logo.css"
const Logo = () => {
    return(
        <div className="logotype">
            <img className="logotypeImg" src={myLogo} alt="none"/>
        </div>
    );
}

export default Logo;