import React, {useState} from "react";
import s from "./Coffee.module.css"
import b from "../styles/Buttons.module.css"
import arrow from "../../img/right-arrow.svg";
import CoffeeCards from "./CoffeeCards/CoffeeCards";

const Coffee = () => {
    const [left, setLeft] = useState(0)

    const onButtonRightClick = (e) => {
        setLeft(left - 42.07)
    }

    const onButtonLeftClick = (e) => {
        setLeft(left + 42.07)
    }

    const ButtonLeft = () => {
        if (left < 0) {
            return <button className={s.buttonLeftWrap} style={{
                marginLeft: "0px",
                zIndex: "1",
                position: 'absolute',
                right: '93.2857vw',
                top: '0',
                transition: 'all .15s'

            }}>
                <button className={b.arrow + ' ' + b.left}
                        onClick={onButtonLeftClick}
                ><img src={arrow}/></button>
            </button>
        }
    }

    const ButtonRight = () => {
        if (left >= 0) {
            return <button className={s.buttonRightWrap} style={{
                position: 'absolute',
                // left: '100vw',
                right: '0',
                top: '0',
                transition: 'all .15s'

            }}
            >
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

            <div className={s.slider}>

                <div style={{
                    position: 'absolute',
                    left: `${left}vw`,
                    transition: 'all .15s'
                }}>
                    <ButtonLeft/>

                    <div className={s.slide}
                         style={{
                             width: `${100 + -left}vw`,
                             transition: 'all .1s'
                         }}
                    >
                        <CoffeeCards/>
                    </div>
                    <ButtonRight/>

                </div>


            </div>
        </div>
    )
}

export default Coffee