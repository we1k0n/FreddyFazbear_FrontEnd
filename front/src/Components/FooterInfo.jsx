import React from "react"
import "../Style/FooterInfo.css"
import Image from "../Img/logofooter.png"

const FooterInfo = () => {

    return (
        <div className="Footer">
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
    );
}

export default FooterInfo;