import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Logo from "./Components/Logo";
import "./Style/Auth.css"
import leftImage from "./Img/AuthPizzaLeft.png"
import rightImage from "./Img/AuthRightImg.png"
function Auth() {
    const [isRecoveryPasswordWindowOpen, setRecoveryPasswordWindowOpen] = useState(false)
    const [isRecoveryPasswordWindowOpenContinue, setRecoveryPasswordWindowOpenContinue] = useState(false)
    const practicePasswordWindowRef = useRef(null)
    const practicePasswordWindowRefContinue = useRef(null)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();


        const authData = {
            username: formData.email,
            password: formData.password,
        }

        const apiUrl = 'http://127.0.0.1:8000/api/api/token/';

        axios.post(apiUrl, authData)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('access_token', response.data.access)
                localStorage.setItem('refresh_token', response.data.refresh)

                // window.location.pathname = '/'
            })
            .catch((error) => {
                console.error('Помилка авторизації:', error)

            });

    }

    const toggleRecoveryPasswordWindow = () => {
        setRecoveryPasswordWindowOpen(!isRecoveryPasswordWindowOpen);
    };

    const toggleRecoveryPasswordWindowContinue = () => {
        setRecoveryPasswordWindowOpenContinue(!isRecoveryPasswordWindowOpenContinue);
        setRecoveryPasswordWindowOpen(false)
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (practicePasswordWindowRef.current && !practicePasswordWindowRef.current.contains(event.target)) {
                setRecoveryPasswordWindowOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [practicePasswordWindowRef]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (practicePasswordWindowRefContinue.current && !practicePasswordWindowRefContinue.current.contains(event.target)) {
                setRecoveryPasswordWindowOpenContinue(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [practicePasswordWindowRefContinue]);






    return (
        <>
            <div>
                <Logo />
                <img className="AuthLeftImg" src={leftImage} alt="none" />
                <img className="AuthRightImg" src={rightImage} alt="none" />

                <div className="authBackground">
                    <div className="AuthMainInfo">
                        <input
                            className="InputEmailAuth"
                            type="email"
                            required placeholder="Введіть email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} />

                        <input
                            className="InputPasswordAuth"
                            type="password"
                            required placeholder="Введіть пароль"
                            name="password"
                            value={formData.password}
                            onChange={handleChange} />

                        <button onClick={toggleRecoveryPasswordWindow} className="recoveryPasswordButton">Забули пароль?</button>
                        <button className="continue" onClick={handleSubmit}>Продовжити</button>
                    </div>
                    <div className="AuthSecondInfo">
                        <div className="AuthLeftLine"></div>
                        <p className="AuthNewText">Новенькі?</p>
                        <div className="AuthRightLine"></div>
                        <button className="AuthRegistrationBtn">Зареєструватися</button>
                    </div>


                </div>


            </div>

            {isRecoveryPasswordWindowOpen && (
                <>
                    <div onClick={toggleRecoveryPasswordWindow} className="BackgroundWindowRecPass"></div>
                    <div className="BackgroundRecoveryPassword">
                        <p className="NewWindowText">Відновлення паролю</p>
                        <div onClick={toggleRecoveryPasswordWindow} className="close-overlay">
                            <svg
                                className="AuthIconCloseNewWindow"
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.2386 12.5L24.3459 5.39276C25.218 4.5206 25.218 3.10653 24.3459 2.23366L22.7663 0.654119C21.8942 -0.21804 20.4801 -0.21804 19.6072 0.654119L12.5 7.76136L5.39276 0.654119C4.5206 -0.21804 3.10653 -0.21804 2.23366 0.654119L0.654119 2.23366C-0.21804 3.10582 -0.21804 4.51989 0.654119 5.39276L7.76136 12.5L0.654119 19.6072C-0.21804 20.4794 -0.21804 21.8935 0.654119 22.7663L2.23366 24.3459C3.10582 25.218 4.5206 25.218 5.39276 24.3459L12.5 17.2386L19.6072 24.3459C20.4794 25.218 21.8942 25.218 22.7663 24.3459L24.3459 22.7663C25.218 21.8942 25.218 20.4801 24.3459 19.6072L17.2386 12.5Z"
                                    fill="#797575"
                                />
                            </svg>
                        </div>
                        <input
                            className="InputEmailAuthRecovery"
                            type="email"
                            required placeholder="Введіть email"
                            name="email" />
                        <button onClick={toggleRecoveryPasswordWindowContinue} className="NewWindowContinue">Продовжити</button>
                    </div>
                </>


            )}

            {isRecoveryPasswordWindowOpenContinue && (
                <>
                    <div onClick={toggleRecoveryPasswordWindowContinue} className="BackgroundWindowRecPass"></div>
                    <div className="BackgroundRecoveryPassword">
                        <p className="NewWindowText">Відновлення паролю</p>
                        <div onClick={toggleRecoveryPasswordWindowContinue} className="close-overlay">
                            <svg
                                className="AuthIconCloseNewWindow"
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.2386 12.5L24.3459 5.39276C25.218 4.5206 25.218 3.10653 24.3459 2.23366L22.7663 0.654119C21.8942 -0.21804 20.4801 -0.21804 19.6072 0.654119L12.5 7.76136L5.39276 0.654119C4.5206 -0.21804 3.10653 -0.21804 2.23366 0.654119L0.654119 2.23366C-0.21804 3.10582 -0.21804 4.51989 0.654119 5.39276L7.76136 12.5L0.654119 19.6072C-0.21804 20.4794 -0.21804 21.8935 0.654119 22.7663L2.23366 24.3459C3.10582 25.218 4.5206 25.218 5.39276 24.3459L12.5 17.2386L19.6072 24.3459C20.4794 25.218 21.8942 25.218 22.7663 24.3459L24.3459 22.7663C25.218 21.8942 25.218 20.4801 24.3459 19.6072L17.2386 12.5Z"
                                    fill="#797575"
                                />
                            </svg>
                        </div>
                        <p className="GuideForRecoverPassword">Інструкція щодо відновлення паролю
                            надіслана вам на електронну адресу!
                        </p>
                    </div>
                </>
            )}

        </>
    );
}

export default Auth;