import React from "react";
import s from "./Coffee.module.css"
import b from "../Buttons.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, showOrHideInfo} from "../../reduxToolkit/toolkitSlice";

const CoffeeCards = () => {

    const cards = useSelector(state => state.toolkit.cards.filter(i => i.type === 'coffee'))
    const dispatch = useDispatch()

    const Cards = cards.map(c =>
            <div key={c.id} className={s.card}>
                <img src={c.image}/>
                <div className={s.cardContent}>
                    <h2>{c.price}</h2>
                    <h1>{c.title}</h1>
                    <p>{c.description}</p>
                    <button className={b.buy} onClick={() => dispatch(addToBasket(c))}>MUA NGAY</button>
                    <button className={b.info} onClick={() => dispatch(showOrHideInfo(c))}>CHI TIẾT</button>
                </div>
            </div>
    )
    return (
        Cards
    )
}

export default CoffeeCards