import React from "react";
import s from "./Combo.module.css"
import b from "./Buttons.module.css"
import arrow from "./img/right-arrow.svg"
import ComboCards from "./ComboCards";

const Combo = () => {

    return (
        <div className={s.comboBlockWrapper} id='combo'>
            <div className={s.comboBlock}>
                <div className={s.description}>
                    <h2>Your Personalized Coffee</h2>
                    <h1>COMBO PHIN PHÊ</h1>
                </div>

                <div className={s.slider}>
                    <div className={s.buttonLeftWrap}>
                    <button className={b.arrow + ' ' + b.left}><img src={arrow}/></button>
                    </div>
                   <ComboCards />
                    <div className={s.buttonRightWrap}>
                    <button className={b.arrow + ' ' + b.right}><img src={arrow}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Combo