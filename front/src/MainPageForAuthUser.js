import React from "react";
import "./Style/MainPageForAuthUser.css"
import Logo from "./Components/Logo";
import HeaderUser from "./Components/HeaderUser";
import NavigationFood from "./Components/NavigationFood";
import FooterInfo from "./Components/FooterInfo";
import MostPopularDishes from "./Components/MostPopularDishes";
import DishesDiv from "./Components/DishesDiv";
function MainPageForAuthUser(){
    return(
    <>
        <Logo/>
        <HeaderUser/>
        <NavigationFood/>
        <MostPopularDishes>
            <DishesDiv/>
            <DishesDiv/>
            <DishesDiv/>






            
            
            
          
        </MostPopularDishes>
        <FooterInfo/>
    </>
    );
}

export default MainPageForAuthUser;