import React, { useState, useEffect } from "react";
import Logo from "./Components/Logo";
import HeaderUser from "./Components/HeaderUser";
import NavigationFood from "./Components/NavigationFood";
import AllFoodComponetns from "./Components/AllFoodComponents";
import DishesDiv1 from "./Components/DishesDiv1";


function AllFood() {
    const [numberFromComponent, setNumberFromComponent] = useState(0);
    const [leftPositionStyle, setleftPositionStyle] = useState(50);
    const [NameOfFood, setNameOfFood] = useState("Все");
    // Функція, яка отримує дані з компонента і встановлює їх в стан
    const getDataFromComponent = (data) => {
        setNumberFromComponent(data);
        console.log(data);
    };

    const renderPage = () => {
        switch (numberFromComponent) {
            case 0:
                setleftPositionStyle(150);
                setNameOfFood("Все")
                break;
            case 1:
                setleftPositionStyle(335);
                setNameOfFood("Піца")
                break;
            case 2:
                setleftPositionStyle(520);
                setNameOfFood("Бургер")
                break;
            case 3:
                setleftPositionStyle(705);
                setNameOfFood("Паста")
                break;
            case 4:
                setleftPositionStyle(890);
                setNameOfFood("М'ясо")
                break;
            case 5:
                setleftPositionStyle(1075);
                setNameOfFood("Риба")
                break;
            case 6:
                setleftPositionStyle(1260);
                setNameOfFood("Сендвічі")
                break;
            case 7:
                setleftPositionStyle(1445);
                setNameOfFood("Супи")
                break;
            case 8:
                setleftPositionStyle(1630);
                setNameOfFood("Випічка")
                break;
            default:
                setleftPositionStyle(150);
                setNameOfFood("Все")
        }
    }

    useEffect(() => {
        renderPage();
    }, [numberFromComponent]);


        return (
            <>
            <div className="HeaderAllFood">
                {NameOfFood}
            </div>
            <div className="NavagationBackgrondMove"
            style={{ left: `${leftPositionStyle}px` }}
            ></div>
                <Logo />
                <HeaderUser />
                <NavigationFood sendData={getDataFromComponent} />
                <AllFoodComponetns>
                    <DishesDiv1 />
                    <DishesDiv1 />
                    <DishesDiv1 />
                    <DishesDiv1 />
                    <DishesDiv1 />
                    <DishesDiv1 />
                    <DishesDiv1 />
                    <DishesDiv1 />
                    <DishesDiv1 />
                    <DishesDiv1 />
                    <DishesDiv1 />

                </AllFoodComponetns>
            </>
        );
    }

export default AllFood;