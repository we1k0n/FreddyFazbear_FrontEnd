import React from "react";
import Logo from "./Components/Logo";
import leftImage from "./Img/AuthPizzaLeft.png"
import rightImage from "./Img/AuthRightImg.png"

function RegRestaurant() {
    return (
        <>
            <Logo />
            <img className="AuthLeftImg" src={leftImage} alt="none" />
            <img className="AuthRightImg" src={rightImage} alt="none" />
            <div className="authBackground">
            <div className="RegUserInput">
                    <input
                        className="InputNameUser"
                        type="text"
                        required placeholder="Введіть назву"
                        name="NameRestaurant" />
                    <input
                        className="InputLastNameUser"
                        type="text"
                        required placeholder="Введіть тип"
                        name="TypeOfRestaurant" />
                    <input
                        className="InputEmailRegUser"
                        type="email"
                        required placeholder="Введіть email"
                        name="email" />
                    <input
                        className="InputPassRegUser"
                        type="password"
                        required placeholder="Введіть пароль"
                        name="passwordRestaurant" />
                    <p className="RegUserRecForPass">
                        Пароль повинен містити від 6 символів.
                    </p>
                    <input
                        className="InputRepeatPassRegUser"
                        type="password"
                        required placeholder="Повторіть пароль"
                        name="RepeatPassRestaurant" />

                    <button className="continueRegUser">Продовжити</button>
                </div>
                <div className="RegUserSecondInfo">
                    <div className="RegUserLeftStick"></div>
                    <p className="RegUserBottomInfo">Уже зареєстровані?</p>
                    <div className="RegUserRightStick"></div>
                    <button className="RegUserBtnLogin">Увійти</button>
                </div>
            </div>
        </>
    );
}

export default RegRestaurant;