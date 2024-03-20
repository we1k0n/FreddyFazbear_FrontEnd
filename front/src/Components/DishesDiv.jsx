import React from "react";
import "../Style/DishesDiv.css"
import DishImg from "../Img/DishesImg.png"
const DishesDiv = () => {
    return (
        <div className="DishesBackground">
            <img className="DishesItemImage" src={DishImg} alt="none" />
            <div className="DishItemName">Бургер Біг Мак</div>
            <div className="DishItemPrice">250 грн</div>
            <div className="DishItemTimeBackground">
                <div className="DishItemTimeText">30 mins</div>
                <svg
                    className="clockIcon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_1012_3282)">
                        <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M6 3V6L8 7"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1012_3282">
                            <rect width="12" height="12" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default DishesDiv;