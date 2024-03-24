import React, {useState, useEffect} from "react";
import "../Style/DishesDiv1.css"
import DishImg from "../Img/DishesImg.png"
const DishesDiv = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/dishes/');
      const jsonData = await response.json();
      setData(jsonData);
      console.log(data)
    } catch (error) {
      console.error('Помилка завантаження даних:', error);
    }
  };

    return (
        <div className="DishesBackground1">
            
            <img className="DishesItemImage1" src={DishImg} alt="none" />
            <div className="DishItemName1">Бургер Біг Мак</div>
            <div className="DishItemPrice1">250 грн</div>
            <div className="DishItemTimeBackground1">
                <div className="DishItemTimeText1">30 mins</div>
                <svg
                    className="clockIcon1"
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