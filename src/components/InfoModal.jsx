import React, {useState} from "react";
import s from "./InfoModal.module.css"
import b from "./Buttons.module.css"
import beans from "./img/coffeeBeans.svg";
import place from "./img/mountain.svg";

const InfoModal = (props) => {

    const {info} = props

    // const [infoModal, setInfoModal] = useState(false);

return (
        <div className={s.infoModalWrapper}>
            <div className={s.infoModal}>

                <div className={s.info}>
                    <img src={info.image}/>
                    <h2>{info.price}</h2>
                    <h4>{info.lastPrice}</h4>
                    <h1>{info.title}</h1>
                    <h3>{info.shortDescription}</h3>
                    <p>{info.description}</p>

                    <div className={s.properties}>
                        <div className={s.property}>
                            <img src={beans}/>
                            <div>
                                <h4>{info.beansTitle}</h4>
                                <h3>{info.beansInfo}</h3>
                            </div>
                        </div>
                        <div className={s.property}>
                            <img src={place}/>
                            <div>
                                <h4>{info.placeTitle}</h4>
                                <h3>{info.placeInfo}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.buttons}>
                    <button className={b.buy}>MUA NGAY</button>
                    <button className={b.info}>CHI TIẾT</button>
                </div>


            </div>
        </div>
    )
}

export default InfoModal