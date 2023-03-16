import React, {useState} from "react";
import s from "./Combo.module.css"
import b from "../styles/Buttons.module.css"
import arrow from "../../img/right-arrow.svg"
import ComboCards from "./ComboCards/ComboCards";

const Combo = () => {
    const [left, setLeft] = useState(0);
    const [infoModal, setInfoModal] = useState(false);

    const onButtonRightClick = (e) => {
        if (window.innerWidth > 862) {
            setLeft(left - 27.857)
        } else {
            setLeft(left - 100)
        }
    }

    const onButtonLeftClick = (e) => {
        if (window.innerWidth > 862) {
            setLeft(left + 27.857)
        } else {
            setLeft(left + 100)
        }
    }

    const ButtonLeft = () => {
        if (left < 0 && window.innerWidth > 862) {
            return <div
                className={s.buttonLeftWrap}
                style={{
                    marginLeft: "0px",
                    zIndex: "1",
                    position: 'absolute',
                    left: '27.8vw',
                    top: '0',
                    transition: 'all .15s'
                }}
            >
                <button
                    onClick={onButtonLeftClick}
                    className={b.arrow + ' ' + b.left}
                ><img src={arrow}/></button>
            </div>
        }

        if (left < 0 && window.innerWidth < 862) {
            return <div
                className={s.buttonLeftWrap}
                style={{
                    marginLeft: "0px",
                    zIndex: "1",
                    position: 'absolute',
                    left: '100vw',
                    top: '0',
                    transition: 'all .15s'
                }}
            >
                <button
                    onClick={onButtonLeftClick}
                    className={b.arrow + ' ' + b.left}
                ><img src={arrow}/></button>
            </div>
        }
    }

    const ButtonRight = () => {
        if (left >= 0) {
            return <div
                style={{
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    transition: 'all .15s'

                }}
                className={s.buttonRightWrap}
            >
                <button
                    onClick={onButtonRightClick}
                    className={b.arrow + ' ' + b.right}>
                    <img src={arrow}/>
                </button>
            </div>
        }
    }

    return (
        <div className={s.comboBlockContainer}>

            <div className={s.description}>
                <h2>Your Personalized Coffee</h2>
                <h1>COMBO PHIN PHÊ</h1>
            </div>

            <div className={s.comboBlock} id='combo'>
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
                         }}>
                        <ComboCards infoModal={infoModal} setInfoModal={setInfoModal}/>
                    </div>

                    <ButtonRight/>

                </div>

            </div>
        </div>

    )
}

export default Combo