import React, {useState} from "react";
import s from "./Giftset.module.css"
import GiftsetCard from "./GiftsetCard";

const Giftset = () => {

    const [activeSlide, setActiveSlide] = useState("1");

    const onButtonClick = (e) => {
        e.preventDefault();
        setActiveSlide(e.target.id)
    }

    return (
        <div className={s.giftsetWrapper} id='giftset'>
            <div className={s.giftsetBlock}>
                <div className={s.desctiption}>
                    <h2>Best Gift For Best Friend</h2>
                    <h1>GIFTSET</h1>
                </div>

                <div className={s.slider}>

                    <GiftsetCard id={activeSlide}/>

                    <div className={s.pages}>
                        <button id={"1"} className={activeSlide === "1" ? s.active : ""}
                                onClick={onButtonClick}>1
                        </button>
                        <button id={"2"}
                                className={activeSlide === "2" ? s.active : ""}
                                onClick={onButtonClick}>2
                        </button>
                        <button id={"3"}
                                className={activeSlide === "3"? s.active : ""}
                                onClick={onButtonClick}>3
                        </button>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Giftset