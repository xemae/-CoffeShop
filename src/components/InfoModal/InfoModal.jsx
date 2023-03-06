import React, {useState} from "react";
import s from "./InfoModal.module.css"
import b from "../styles/Buttons.module.css"
import beans from "../../img/coffeeBeans.svg";
import place from "../../img/mountain.svg";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket} from "../../reduxToolkit/toolkitSlice";

const InfoModal = (props) => {

    // const {info} = props

    // const [infoModal, setInfoModal] = useState(false);
    // const info = useSelector(state => state.toolkit.currentCard)
    const {showedCard} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()

    if (showedCard !==null) {
        return (
            <div className={s.infoModalWrapper}>
                <div className={s.infoModal}>

                    <div className={s.info}>
                        <img src={showedCard.image}/>
                        <h2>{showedCard.price}</h2>
                        <h4>{showedCard.lastPrice}</h4>
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
                    </div>

                    <div className={s.buttons}>
                        <button className={b.buy} onClick={() => dispatch(addToBasket(showedCard))}>MUA NGAY</button>
                        {/*<button className={b.info}>CHI TIẾT</button>*/}
                    </div>


                </div>
            </div>
        )
    }
    }



export default InfoModal