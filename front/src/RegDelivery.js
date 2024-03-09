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
                    <div className="TypeOfTransportBackgrond">
                        <p className="TypeTransportText">
                            Оберіть транспортний засіб:
                        </p>

                            <svg
                                className="bicycle"
                                width="70"
                                height="40"
                                viewBox="0 0 70 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M45 1C45 0.447715 45.4477 0 46 0H48C48.3344 0 48.6466 0.167101 48.8321 0.4453L50.1654 2.4453C50.3284 2.68988 50.3756 2.99382 50.2944 3.27633C50.2132 3.55883 50.0118 3.79129 49.7437 3.91192L48.3986 4.51721L51.6945 12.6745C53.0509 12.2366 54.4978 12 56 12C63.732 12 70 18.268 70 26C70 33.732 63.732 40 56 40C48.268 40 42 33.732 42 26C42 20.4783 45.1967 15.7031 49.8404 13.4243L48.5469 10.2231L36.0915 26.5897C36.9624 27.1249 37.6126 27.9844 37.874 29H39C39.5523 29 40 29.4477 40 30C40 30.5523 39.5523 31 39 31H37.874C37.4299 32.7252 35.8638 34 34 34C31.7909 34 30 32.2091 30 30C30 28.7728 30.5526 27.6747 31.4226 26.941L27.6567 15.957L25.3917 17.8601C27.0336 20.1538 28 22.964 28 26C28 26.3611 27.9863 26.7191 27.9595 27.0733L30.8401 27.5426C30.4203 28.081 30.1352 28.7297 30.0356 29.4379L27.6664 29.0519C26.2736 35.3163 20.6838 40 14 40C6.26801 40 0 33.732 0 26C0 18.268 6.26801 12 14 12C17.9768 12 21.5663 13.6581 24.1149 16.3207L26.9614 13.929L25.7857 10.5H25C24.8448 10.5 24.6916 10.4639 24.5528 10.3944L23.5528 9.89443C23.0588 9.64744 22.8586 9.04677 23.1056 8.55279C23.3526 8.05881 23.9532 7.85858 24.4472 8.10557L25.2361 8.5H26.5H29C29.5523 8.5 30 8.94771 30 9.5C30 10.0523 29.5523 10.5 29 10.5H27.9L28.6966 12.8235L47.6034 7.8879L46.1839 4.37462C45.9827 3.87657 46.2109 3.30851 46.7007 3.08808L47.8465 2.5725L47.4648 2H46C45.4477 2 45 1.55228 45 1ZM35.7324 29H34C33.4477 29 33 29.4477 33 30C33 30.5523 33.4477 31 34 31H35.7324C35.3866 31.5978 34.7403 32 34 32C32.8954 32 32 31.1046 32 30C32 28.8954 32.8954 28 34 28C34.7403 28 35.3866 28.4022 35.7324 29ZM45.8991 10.3998L34.0269 26.0001L34 26C33.7398 26 33.4854 26.0248 33.2391 26.0723L29.3471 14.7207L45.8991 10.3998ZM14 14C17.3621 14 20.4013 15.3827 22.5799 17.6104L16.402 22.8012C15.7331 22.2981 14.9014 22 14 22C11.7909 22 10 23.7909 10 26C10 28.2091 11.7909 30 14 30C15.7037 30 17.1586 28.9349 17.7352 27.4342L25.6882 28.7297C24.4524 34.042 19.6884 38 14 38C7.37258 38 2 32.6274 2 26C2 19.3726 7.37258 14 14 14ZM23.855 19.1513L17.6512 24.3639C17.8029 24.7019 17.909 25.0648 17.9618 25.4447L25.9769 26.7504C25.9922 26.5022 26 26.252 26 26C26 23.4541 25.2072 21.0934 23.855 19.1513ZM14 24C14.2786 24 14.5439 24.057 14.7849 24.1599L13.6687 25.0978C13.0139 25.6479 13.3071 26.7129 14.1512 26.8504L15.6719 27.0981C15.3143 27.6414 14.699 28 14 28C12.8954 28 12 27.1046 12 26C12 24.8954 12.8954 24 14 24ZM50.5921 15.2848C46.6813 17.2624 44 21.3181 44 26C44 32.6274 49.3726 38 56 38C62.6274 38 68 32.6274 68 26C68 19.3726 62.6274 14 56 14C54.7627 14 53.5692 14.1872 52.4462 14.535L55.4761 22.034C55.6476 22.0116 55.8224 22 56 22C58.2091 22 60 23.7909 60 26C60 28.2091 58.2091 30 56 30C53.7909 30 52 28.2091 52 26C52 24.6816 52.6379 23.5121 53.6218 22.7834L50.5921 15.2848ZM55.0728 26.3746L54.4239 24.7686C54.1583 25.1081 54 25.5356 54 26C54 27.1046 54.8954 28 56 28C57.1046 28 58 27.1046 58 26C58 24.9898 57.2511 24.1546 56.2782 24.0192L56.9272 25.6254C57.1341 26.1374 56.8867 26.7203 56.3746 26.9272C55.8625 27.1341 55.2797 26.8867 55.0728 26.3746Z"
                                    fill="#797575"
                                />
                            </svg>
                            <svg className="CarIcon" width="71" height="71">
                                <svg
                                    className="CarIconSvg"
                                    width="55"
                                    height="34"
                                    viewBox="0 0 55 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.58311 24.3746H0.875V15.4996C0.875 13.8658 2.19959 12.5412 3.83343 12.5412H9.75L12.1482 2.94867C12.4774 1.63184 13.6605 0.708008 15.0181 0.708008H29.2331C30.0174 0.708008 30.7702 1.01974 31.3248 1.57443L42.2916 12.5412H48.2084C51.4761 12.5412 54.125 15.1901 54.125 18.458V24.3746H47.4166M37.1665 24.3746H17.8335"
                                        stroke="#797575"
                                        stroke-width="2.625"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M48.2084 27.3329C48.2084 30.6005 45.5595 33.2494 42.2916 33.2494C39.0239 33.2494 36.375 30.6005 36.375 27.3329C36.375 24.0649 39.0239 21.416 42.2916 21.416C45.5595 21.416 48.2084 24.0649 48.2084 27.3329Z"
                                        stroke="#797575"
                                        stroke-width="2.625"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M18.6249 27.3329C18.6249 30.6005 15.976 33.2494 12.7084 33.2494C9.44069 33.2494 6.7915 30.6005 6.7915 27.3329C6.7915 24.0649 9.44069 21.416 12.7084 21.416C15.976 21.416 18.6249 24.0649 18.6249 27.3329Z"
                                        stroke="#797575"
                                        stroke-width="2.625"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </svg>
                            <svg
                                className="motocycle"
                                width="71"
                                height="71"
                                viewBox="0 0 71 71"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M42.94 15.5365C42.7975 15.5638 42.6593 15.6099 42.5289 15.6735C42.5289 15.6735 39.2783 16.8134 36.5686 19.0305C36.3707 19.1537 36.2012 19.3177 36.0715 19.5114C35.9417 19.7051 35.8547 19.9242 35.8161 20.1542C35.7775 20.3841 35.7882 20.6197 35.8476 20.8451C35.907 21.0706 36.0136 21.2809 36.1605 21.462C36.3073 21.6431 36.491 21.7909 36.6994 21.8956C36.9077 22.0003 37.1359 22.0596 37.3689 22.0693C37.6018 22.0791 37.8342 22.0392 38.0506 21.9523C38.267 21.8654 38.4624 21.7335 38.6239 21.5653C40.1267 20.3357 41.2197 19.9921 42.1864 19.5785C42.3779 20.3128 42.7667 21.6791 43.351 23.4836C43.2547 23.5064 43.1866 23.5521 43.077 23.5521C29.2655 23.5521 31.6907 30.129 29.7176 30.129C24.8945 30.129 23.127 30.362 22.2501 28.8273C20.9347 26.635 22.0308 25.7444 16.7693 25.7444C9.31546 25.7444 8.41113 28.1423 8.41113 28.1423C8.41113 28.1423 8.67147 30.129 11.083 30.129C20.5099 30.129 23.5929 31.6499 26.2236 33.623C26.6487 33.9418 27.031 34.3056 27.3883 34.7192L25.1275 36.0209C23.408 33.919 20.835 32.5269 17.8655 32.5269C12.6039 32.5269 8.41113 36.7197 8.41113 41.9812C8.41113 47.2427 12.6039 51.4355 17.8655 51.4355C22.4462 51.4355 26.2205 48.257 27.1143 43.968H30.7453C33.7774 46.7063 43.6968 45.579 43.4881 43.2829C43.0832 38.0199 44.7461 33.435 46.0914 30.6771C46.7725 32.1832 47.5999 33.748 48.4893 35.3358C47.5869 36.3 46.8408 37.3781 46.3655 38.4872C45.7078 40.241 45.4748 42.8718 46.571 42.8718C47.5514 42.8718 47.5505 41.8863 48.3522 40.5425C48.0938 41.3469 47.8727 42.1866 47.8727 43.0773C47.8727 47.6812 51.627 51.4355 56.2308 51.4355C60.8347 51.4355 64.589 47.6812 64.589 43.0773C64.589 40.2345 63.1291 37.7295 60.958 36.2264C61.4273 36.2547 61.9366 36.2949 62.3967 36.2949C63.0544 36.2949 61.7253 32.3213 54.9292 32.3213C53.5754 32.3213 52.3293 32.6689 51.2296 33.212C50.2582 31.4315 49.4445 29.7101 48.6948 28.0052C49.8478 28.0281 51.5832 27.8518 51.4352 26.224C51.4352 24.9086 50.5034 22.0449 50.065 20.9487C49.4073 19.1949 47.8727 19.1675 47.8727 19.1675H45.3378C44.9432 17.8766 44.6527 16.8382 44.6527 16.8382C44.5712 16.4517 44.3532 16.1074 44.0387 15.8684C43.7242 15.6294 43.3342 15.5116 42.94 15.5365ZM17.8655 36.706C19.2722 36.706 20.5349 37.2318 21.4965 38.0761L17.3174 40.474C17.1958 40.5292 17.0808 40.5982 16.9748 40.6795C16.8256 40.751 16.6872 40.8433 16.5638 40.9535C16.4659 41.013 16.3742 41.0818 16.2897 41.1591C16.2893 41.1819 16.2893 41.2048 16.2897 41.2276C16.2663 41.2498 16.2434 41.2726 16.2212 41.2961C16.1588 41.4269 16.1127 41.565 16.0842 41.7072C15.9825 42.0132 15.9671 42.3413 16.0396 42.6555C16.1121 42.9697 16.2697 43.2579 16.4953 43.4884C16.5181 43.4889 16.5409 43.4889 16.5638 43.4884C16.5846 43.5351 16.6075 43.5808 16.6323 43.6254C16.6551 43.6259 16.678 43.6259 16.7008 43.6254C16.723 43.6489 16.7458 43.6717 16.7693 43.6939C16.7921 43.6944 16.815 43.6944 16.8378 43.6939C16.8586 43.7406 16.8815 43.7863 16.9063 43.831C16.9292 43.8314 16.952 43.8314 16.9748 43.831C17.0642 43.8611 17.1558 43.884 17.2489 43.8995C17.2717 43.8999 17.2945 43.8999 17.3174 43.8995C17.4067 43.9296 17.4984 43.9525 17.5914 43.968C17.6143 43.9684 17.6371 43.9684 17.6599 43.968C17.7284 43.972 17.797 43.972 17.8655 43.968C17.9111 43.9698 17.9568 43.9698 18.0025 43.968H18.1395H23.0722C22.3586 46.1604 20.3234 47.6675 17.8655 47.6675C14.7962 47.6675 12.3847 45.256 12.3847 42.1867C12.3847 39.1175 14.7962 36.706 17.8655 36.706ZM29.101 37.8021C29.4438 38.65 29.7926 39.5338 29.9917 40.474H27.1828C27.1089 40.0031 26.9796 39.5475 26.8402 39.1038L29.101 37.8021ZM56.2308 38.4872C58.8616 38.4872 61.0265 40.6521 61.0265 43.2829C61.0265 45.9136 58.8616 48.1471 56.2308 48.1471C53.6001 48.1471 51.4352 45.9136 51.4352 43.2829C51.4352 42.4343 51.6545 41.652 52.0518 40.9535C52.9495 42.1527 53.9512 43.3263 54.9977 44.4475C55.1461 44.6095 55.325 44.7407 55.5241 44.8335C55.7233 44.9263 55.9387 44.979 56.1582 44.9886C56.3777 44.9981 56.5969 44.9643 56.8034 44.8892C57.0098 44.814 57.1994 44.6989 57.3614 44.5504C57.5233 44.402 57.6545 44.2231 57.7473 44.0239C57.8401 43.8248 57.8927 43.6093 57.9023 43.3898C57.9118 43.1703 57.878 42.9511 57.8028 42.7447C57.7276 42.5383 57.6125 42.3487 57.464 42.1867C56.4681 41.1197 55.5304 39.9656 54.6551 38.7612C55.1571 38.5806 55.6727 38.4872 56.2308 38.4872Z"
                                    fill="#797575"
                                />
                            </svg>

                    </div>
                    <input
                        className="InputPasswordDelivery"
                        type="password"
                        required placeholder="Введіть пароль"
                        name="DeliveryPassword" />
                    <p className="RegUserRecForPass">
                        Пароль повинен містити від 6 символів.
                    </p>
                    <input
                        className="InputRepeatPasswordDelivry"
                        type="password"
                        required placeholder="Повторіть пароль"
                        name="DeliveryPasswordRepeat" />

                    <button className="continueRegDelivery">Продовжити</button>
                </div>
                <div className="RegDeliverySecondInfo">
                    <div className="RegUserLeftStick"></div>
                    <p className="RegUserBottomInfo">Уже зареєстровані?</p>
                    <div className="RegUserRightStick"></div>
                    <button className="RegUserBtnLogin">Увійти</button>
                </div>
            </div>
        </>
    );

}

export default RegDelivery;