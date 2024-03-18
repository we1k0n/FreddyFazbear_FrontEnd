import React from "react";
import "../Style/HeaderUser.css"

const HeaderUser = () => {
    return (
        <div className="HeaderUser">
            <svg
                className="HeaderUserBackground"
                width="1920"
                height="348"
                viewBox="0 0 1920 348"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1920 325.826C1920 325.826 1454 374.652 965.5 325.826C477 277 0 325.826 0 325.826V0.000396729L1730.24 0.000396729H1920V325.826Z"
                    fill="#FFD600"
                />
            </svg>
            <div className="LinkHeaderUser">
                <div className="SearchInFuture"></div>
                <a href="." className="LinkHeaderStyle">Головна</a>
                <a href="." className="LinkHeaderStyle">Ресторани</a>
                <a href="." className="LinkHeaderStyle">Контакти</a>
                <div className="HeaderUserIconBack">
                    <svg
                        className="HeaderUserIcon"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.33398 39.5837C8.33398 33.8307 12.9977 29.167 18.7507 29.167H31.2507C37.0036 29.167 41.6673 33.8307 41.6673 39.5837C41.6673 43.0354 38.8691 45.8337 35.4173 45.8337H14.584C11.1322 45.8337 8.33398 43.0354 8.33398 39.5837Z"
                            fill="black"
                        />
                        <path
                            d="M25.0007 4.16699C19.2477 4.16699 14.584 8.83069 14.584 14.5837C14.584 20.3366 19.2477 25.0003 25.0007 25.0003C30.7536 25.0003 35.4173 20.3366 35.4173 14.5837C35.4173 8.83069 30.7536 4.16699 25.0007 4.16699Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HeaderUser;