import React from "react";
import "./Style/MainPageForAuthUser.css"
import Logo from "./Components/Logo";
import HeaderUser from "./Components/HeaderUser";
import NavigationFood from "./Components/NavigationFood";
import FooterInfo from "./Components/FooterInfo";
import MostPopularDishes from "./Components/MostPopularDishes";
import DishesDiv from "./Components/DishesDiv";
import MostPopularRestaurants from "./Components/MostPopularRestautants";
import RestaurantsDiv from "./Components/RestaurantsDiv";
import FooterCooperation from "./Components/FooterCooperation";
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
            <DishesDiv/>
            <DishesDiv/>
            <DishesDiv/>
            <DishesDiv/>
            <DishesDiv/>
            <DishesDiv/>
            <DishesDiv/>
            <DishesDiv/>
            <DishesDiv/>
            <DishesDiv/>
        </MostPopularDishes>
        <MostPopularRestaurants>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
            <RestaurantsDiv/>
        </MostPopularRestaurants>
        <FooterCooperation>
         <FooterInfo/>   
        </FooterCooperation>
        
    </>
    );
}

export default MainPageForAuthUser;