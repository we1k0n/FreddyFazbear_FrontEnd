import React from "react";
import "../Style/FooterCooperation.css"
import HandImage from "../Img/CooperationHandImg.png"
import CooperationDelivery from "../Img/CooperationDelivery.png"
import CooperationRestaurant from "../Img/CooperationRestaurant.png"

const FooterCooperation = ({ children }) => {
    return (
        <div className="FooterCooperationBackground">
            <svg
                className="FooterCooperationBack"
                width="1920"
                height="1510"
                viewBox="0 0 1920 1510"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 69.1685C0 69.1685 303.5 -86.4606 960 69.1685C1616.5 224.798 1920 69.1685 1920 69.1685V1510H0V69.1685Z"
                    fill="url(#paint0_linear_1021_4495)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_1021_4495"
                        x1="960"
                        y1="-306.099"
                        x2="960"
                        y2="1510"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#FFD600" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="EllipseFooterCooperation">
                <img src={HandImage} alt="none" className="HandFooterImg"></img>
            </div>
            <div className="CooperationDeliveryBackground">
                <img src={CooperationDelivery} alt="none" className="CooperationDeliveryImg" />
                <div className="CooperationDeliveryHeaderText">Стати кур'єром!</div>
                <div class="delivery-kolomyia">
                    <span>
                        <span class="delivery-kolomyia-span">
                            Вас цікавить конкурентоспроможна оплата, гнучкий графік і повна
                            самостійність? Доставляйте з
                        </span>
                        <span class="delivery-kolomyia-span2"> Delivery Kolomyia!</span>
                    </span>
                </div>
                <button className="CooperationButton">Зареєструватись</button>
            </div>
            <div className="CooperationRestaurantBackground">
                <img src={CooperationRestaurant} alt="none" className="CooperationRestaurantImg" />
                <div className="CooperationDeliveryHeaderText">Стати партнером!</div>
                <p className="CooperationRestaurantText">
                Прискорюйте зростання бізнесу разом із Delivery Kolomyia! Наші технології та база користувачів — ідеальний рецепт для збільшення продажів і відкриття нових можливостей!
                </p>
                <button className="CooperationResButton">Зареєструватись</button>
            </div>
            {children}
        </div>
    );
}

export default FooterCooperation;