import React, {useState} from "react";
import s from "./InfoModal.module.css"
import b from "../styles/Buttons.module.css"
import beans from "../../img/coffeeBeans.svg";
import place from "../../img/mountain.svg";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, hideBasket, hideInfo} from "../../reduxToolkit/toolkitSlice";

const InfoModal = (props) => {

    // const {info} = props

    // const [infoModal, setInfoModal] = useState(false);
    // const info = useSelector(state => state.toolkit.currentCard)
    const {showedCard} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()

    const setDiscount = (lastPrice) => {
        if (lastPrice !== undefined) {
            return lastPrice + '.00'
        }
    }

    if (showedCard !== null) {
        return (
            <div className={s.infoModalWrapper} onClick={() => dispatch(hideInfo())}>
                <div className={s.infoModal} onClick={e => e.stopPropagation()}>
                    <button className={s.close} onClick={() => dispatch(hideInfo())}>&times;</button>

                    <div className={s.CardWrapper}>
                        <img className={s.cardImage} src={showedCard.image}/>
                        <div className={s.cardInfo}>
                            <h2>{showedCard.price + '.00'}</h2>
                            <h4>{setDiscount(showedCard.lastPrice)}</h4>
                            <h1>{showedCard.title}</h1>
                            <h3>{showedCard.shortDescription}</h3>
                            <p>{showedCard.description}</p>

                            <div className={s.properties}>
                                <div className={s.property}>
                                    <img src={beans}/>
                                    <div>
                                        <h4>{showedCard.beansTitle}</h4>
                                        <h3>{showedCard.beansInfo}</h3>
                                    </div>
                                </div>
                                <div className={s.property}>
                                    <img src={place}/>
                                    <div>
                                        <h4>{showedCard.placeTitle}</h4>
                                        <h3>{showedCard.placeInfo}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={s.buttons}>
                                <button className={b.buy} onClick={() => dispatch(addToBasket(showedCard))}>MUA NGAY</button>
                                {/*<button className={b.info}>CHI TIẾT</button>*/}
                            </div>
                        </div>

                    </div>




                </div>
            </div>
        )
    }
    }



export default InfoModal