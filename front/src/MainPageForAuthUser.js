import React from "react";
import "./Style/MainPageForAuthUser.css"
import Logo from "./Components/Logo";
import HeaderUser from "./Components/HeaderUser";
import NavigationFood from "./Components/NavigationFood";
function MainPageForAuthUser(){
    return(
    <>
        <Logo/>
        <HeaderUser/>
        <NavigationFood/>
    </>
    );
}

export default MainPageForAuthUser;