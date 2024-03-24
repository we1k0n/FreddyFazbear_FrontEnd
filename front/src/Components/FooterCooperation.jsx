import React from "react";
import "../Style/FooterCooperation.css"
import HandImage from "../Img/CooperationHandImg.png"
import CooperationDelivery from "../Img/CooperationDelivery.png"
import CooperationRestaurant from "../Img/CooperationRestaurant.png"
import Image from "../Img/logofooter.png"

const FooterCooperation = ({ children }) => {
    return (
        <>
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
            
        
        <div className="Footer1">
        <svg
            class="FooterBackground"
            width="1920"
            height="497"
            viewBox="0 0 1920 497"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 59.7779C0 59.7779 357 -72.7229 960 59.7779C1563 192.279 1920 59.7779 1920 59.7779V496.778H0V59.7779Z"
                fill="url(#paint0_linear_1037_3263)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1037_3263"
                    x1="0"
                    y1="278.277"
                    x2="1920"
                    y2="278.277"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#FFEF98" />
                    <stop offset="1" stop-color="#FFEF9A" />
                </linearGradient>
            </defs>
        </svg>
        <img src={Image} alt="none" className="FooterLogo"></img>
        <div className="FooterHelpInfo">Потрібна допомога? Зв'яжіться з нами.</div>
        <div className="FooterInfoTextBack">
            <div className="FooterInfoBack">
                <div className="FooterTextHeader">Робочі години</div>
                <p className="FooterText">З Пн. по Пт. 10:00-20:00<br />
                    Сб. - Нд. 10:00-17:00
                </p>
            </div>
            <div className="FooterInfoBack">
                <div className="FooterTextHeader">Телефони</div>
                <p className="FooterText">(066)690-77-09<br />
                    (050)991-98-60
                </p>
            </div>
            <div className="FooterInfoBack">
                <div className="FooterTextHeader">Адреса</div>
                <p className="FooterText">Івано-Франківська<br />
                    обл., м. Коломия,<br />
                    вул. Антона Чехова,<br />
                    20, 78200
                </p>
            </div>
            <div className="FooterInfoBack1">
                <div className="FooterTextHeader">Емейл</div>
                <p className="FooterText">oleksandr.diomushkin@kpk-<br />
                    lp.com.ua<br />
                    arsen.chuiko@kpk-lp.com.ua
                </p>
            </div>
        </div>
    </div>
    </div>
        </>
        
    );
}

export default FooterCooperation;