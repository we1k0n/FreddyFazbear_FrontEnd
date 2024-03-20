import React from "react";
import "../Style/MostPopularRestaurants.css"

const MostPopularRestaurants = ({children}) => {
    return(
        <div className="MostPopularRestaurantsBackground">
            <div className="MostPopularRestaurantsText">Найпопулярніші ресторани!</div>
            <div className="RestaurantsListInMostPopularDiv">
                {children}
            </div>
        </div>
    );
}

export default MostPopularRestaurants;