import React, {useState} from "react";
import s from "./Coffee.module.css"
import b from "../styles/Buttons.module.css"
import arrow from "../../img/right-arrow.svg";
import CoffeeCards from "./CoffeeCards/CoffeeCards";

const Coffee = () => {
    const [left, setLeft] = useState(0)

    const onButtonRightClick = (e) => {
        setLeft(left - 589)
    }

    const onButtonLeftClick = (e) => {
        setLeft(left + 589)
    }

    const ButtonLeft = () => {
        if (left < 0) {
            return <button className={s.buttonLeftWrap} style={{
                marginLeft: "0px",
                zIndex: "1"
            }}>
                <button className={b.arrow + ' ' + b.left}
                        onClick={onButtonLeftClick}
                ><img src={arrow}/></button>
            </button>
        }
    }

    const ButtonRight = () => {
        if (left >= 0) {
            return <button className={s.buttonRightWrap}>
                <button className={b.arrow + ' ' + b.right}
                        onClick={onButtonRightClick}
                ><img src={arrow}/></button>
            </button>
        }
    }

    return (
        <div className={s.sliderBlock} id='coffee'>
            <div className={s.sliderInfo}>
                <h2>Choose Your Favorite</h2>
                <h1>CHUẨN GU ĐÚNG VỊ</h1>
            </div>

                <ButtonLeft/>

                <div style={{
                    position: 'absolute',
                    left: `${left}px`,
                    transition: 'all .15s'
                }}>

                    <div className={s.slide}
                         style={{
                             width: `${1400+-left}px`,
                             transition: 'all .1s'
                         }}
                    >
                        <CoffeeCards/>
                    </div>

                </div>

                <ButtonRight/>

        </div>
    )
}

export default Coffee