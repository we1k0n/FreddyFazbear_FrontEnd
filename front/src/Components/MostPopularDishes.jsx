import React from "react";
import "../Style/MostPopularDishes.css"

const MostPopularDishes = ({children}) => {
    return(
        <div className="MostPopularDishesbackground">
            <div className="MostPopularDishesText">Найпопулярніші страви!</div>
            <div className="DishesListInMostPopularDiv">
                {children}
            </div>
        </div>
    );
}

export default MostPopularDishes;