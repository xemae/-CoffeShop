import React, {useState} from "react";
import s from "./Giftset.module.css"
import GiftCard from "./GiftsetCard";

const Giftset = () => {

    // const [isActive, setActive] = useState("false");

    const onButtonClick = (e) => {
        e.preventDefault();
        // (e.target.classList.contains("active") === true) ? e.target.classList.remove("active")

            e.target.classList.add("active");
        return <GiftCard id={e.target.id} />
    }

    return (
        <div className={s.giftsetWrapper} id='giftset'>
            <div className={s.giftsetBlock}>
                <div className={s.desctiption}>
                    <h2>Best Gift For Best Friend</h2>
                    <h1>GIFTSET</h1>
                </div>

                <div className={s.slider}>

                    <GiftCard id={1}/>

                    <div className={s.pages}>
                        <button id={'1'} className={s.active} onClick={onButtonClick}>1</button>
                        <button id={'2'} onClick={onButtonClick}>2</button>
                        <button id={'3'} onClick={onButtonClick}>3</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Giftset