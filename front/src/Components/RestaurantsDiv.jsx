import React from "react";
import "../Style/DishesDiv.css"
import RestaurantImg from "../Img/RestaurantImg.png"
const RestaurantsDiv = () => {
    return (
        <div className="DishesBackground">
            <img className="DishesItemImage" src={RestaurantImg} alt="none" />
            <div className="DishItemName">Піцарія Daniel</div>
            <div className="DishItemPrice">Фастфуд</div>
        </div>
    );
}

export default RestaurantsDiv;