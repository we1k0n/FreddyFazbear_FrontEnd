import React from "react";
import Logo from "./Components/Logo";
import leftImage from "./Img/AuthPizzaLeft.png"
import rightImage from "./Img/AuthRightImg.png"
import "./Style/RegDelivery.css"

function RegDelivery() {
    return (
        <>
            <Logo />
            <img className="AuthLeftImg" src={leftImage} alt="none" />
            <img className="AuthRightImg" src={rightImage} alt="none" />
            <div className="DeliveryRegBackground">
                <div className="DeliveryRegInput">
                <input
                        className="InputNameDelivery"
                        type="text"
                        required placeholder="Введіть ім'я"
                        name="DeliveryFirstName" />
                        <input
                        className="InputLastNameDelivery"
                        type="text"
                        required placeholder="Введіть Прізвище"
                        name="DeliveryLastName" />
                        <input
                        className="InputEmailDelivery"
                        type="email"
                        required placeholder="Введіть email"
                        name="DeliveryEmail" />
                        <input
                        className="InputPhoneNumberDelivery"
                        type="text"
                        required placeholder="Введіть номер телефону"
                        name="DeliveryPhoneNumber" />
                        
                </div>
                <div>

                </div>
            </div>
        </>
    );

}

export default RegDelivery;