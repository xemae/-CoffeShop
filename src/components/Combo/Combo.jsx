import React, {useState} from "react";
import s from "./Combo.module.css"
import b from "../styles/Buttons.module.css"
import arrow from "../../img/right-arrow.svg"
import ComboCards from "./ComboCards/ComboCards";
import InfoModal from "../InfoModal/InfoModal";

const Combo = () => {
    const [left, setLeft] = useState(0);
    const [infoModal, setInfoModal] = useState(false);

    const onButtonRightClick = (e) => {
        setLeft(left - 27.857)
    }

    const onButtonLeftClick = (e) => {
        setLeft(left + 27.857)
    }

    const ButtonLeft = () => {
        if (left < 0) {
            return <div
                className={s.buttonLeftWrap}
                style={{
                    zIndex: "1",
                }}
            >
                <button
                    onClick={onButtonLeftClick}
                    className={b.arrow + ' ' + b.left}
                    // style={{marginTop: "100px"}}
                ><img src={arrow}/></button>
            </div>
        }
    }

    const ButtonRight = () => {
        if (left >= 0) {
            return <div
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

    // if (infoModal) {
    //     return <InfoModal />
    // }

    return (
        <div className={s.comboBlockContainer}>
            <div className={s.description}>
                <h2>Your Personalized Coffee</h2>
                <h1>COMBO PHIN PHÊ</h1>
            </div>
            <div className={s.comboBlockWrapper} id='combo'>
                <div className={s.comboBlock}>


                    <ButtonLeft/>

                    <div style={{
                        position: 'absolute',
                        left: `${left}vw`,
                        transition: 'all .15s'
                    }}>
                        <div className={s.slide}
                             style={{
                                 width: `${100 + -left}vw`,
                                 transition: 'all .1s'
                             }}>
                            <ComboCards infoModal={infoModal} setInfoModal={setInfoModal}/>
                        </div>
                    </div>

                    <ButtonRight/>

                </div>
            </div>
        </div>

    )
}

export default Combo