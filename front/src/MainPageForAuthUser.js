import React, {useState} from "react";
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
    const [numberFromComponent, setNumberFromComponent] = useState(0);
    const getDataFromComponent = (data) => {
        setNumberFromComponent(data);
        console.log(data);
    };
    return(
    <>
    <div className="NavagationBackgrondMove"
            style={{ left: `150px` }}
            ></div>
        <Logo/>
        <HeaderUser/>
        <NavigationFood sendData={getDataFromComponent} />
        <MostPopularDishes>
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