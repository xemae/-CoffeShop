import React from "react";
import s from "../Giftset.module.css"
import b from "../../styles/Buttons.module.css"
import beans from "../../../img/coffeeBeans.svg";
import place from "../../../img/mountain.svg";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, showInfo} from "../../../reduxToolkit/toolkitSlice";

const GiftsetCard = (props) => {

    const cards = useSelector(state => state.toolkit.cards.filter(i => i.type === 'gift'))
    const dispatch = useDispatch()

    const card = cards.find(el => el.id == props.id)

    return (
        <div className={s.giftCard}>
            <img className={s.giftImage} src={card.image}/>
            <div className={s.cardContent}>
                <h2>{card.price + '.00'}</h2>
                <h1>{card.title}</h1>
                <p>{card.description}</p>
                <div className={s.giftProperties}>
                    <div className={s.property}>
                        <img src={beans}/>
                        <div>
                            <h4>{card.beansTitle}</h4>
                            <h3>{card.beansInfo}</h3>
                        </div>
                    </div>
                    <div className={s.property}>
                        <img src={place}/>
                        <div>
                            <h4>{card.placeTitle}</h4>
                            <h3>{card.placeInfo}</h3>
                        </div>
                    </div>
                </div>
                <div className={s.buttons}>
                    <button className={b.buy} onClick={() => dispatch(addToBasket(card))}>MUA NGAY</button>
                    <button className={b.info} onClick={() => dispatch(showInfo(card))}>CHI TIẾT</button>
                </div>

            </div>
        </div>
    )
}

export default GiftsetCard