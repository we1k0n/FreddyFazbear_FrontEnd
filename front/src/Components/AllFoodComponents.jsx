import React from "react";
import "../Style/AllFood.css"
const AllFoodComponetns = ({children}) => {



    return(
        <div className="AllFoodBackgrond">
            
            <div className="ListDishesAllFood">
                {children}
            </div>
        </div>
    );
}

export default AllFoodComponetns;