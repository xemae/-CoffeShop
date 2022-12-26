import React from "react";
import s from "./Coffee.module.css"
import b from "./Buttons.module.css"
import arrow from "./img/right-arrow.svg";
import CoffeeCards from "./CoffeeCards";

const Coffee = () => {
    return (
        <div className={s.sliderBlock} id='coffee'>

            <div className={s.sliderInfo}>
                <h2>Choose Your Favorite</h2>
                <h1>CHUẨN GU ĐÚNG VỊ</h1>
            </div>

            <div className={s.slider}>
                <button className={s.buttonLeftWrap}>
                    <button className={b.arrow + ' ' + b.left}><img src={arrow}/></button>
                </button>
                <CoffeeCards/>
                <button className={s.buttonRightWrap}>
                    <button className={b.arrow + ' ' + b.right}><img src={arrow}/></button>
                </button>
            </div>

        </div>
    )
}

export default Coffee