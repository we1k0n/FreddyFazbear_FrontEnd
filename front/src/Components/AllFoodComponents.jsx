import React from "react";
import "../Style/AllFood.css"
import FooterInfo from "./FooterInfo";
const AllFoodComponetns = ({children}) => {



    return(
        <>
        <div className="AllFoodBackgrond">
            
            <div className="ListDishesAllFood">
                {children}
            </div>
            <FooterInfo/>
        </div>
        
        </>
        
    );
}

export default AllFoodComponetns;