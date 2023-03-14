import React from "react";
import s from "../Coffee.module.css"
import b from "../../styles/Buttons.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, showInfo} from "../../../reduxToolkit/toolkitSlice";

const CoffeeCards = () => {

    const {cards} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()

    const Cards = cards.filter(i => i.type === 'coffee').map(c =>
        <div key={c.id} className={s.card}>

            <img src={c.image}/>
            <div className={s.cardContent}>
                <h2>{c.price + '.00'}</h2>
                <h1>{c.title}</h1>
                <p>{c.description}</p>
            </div>

            <div className={s.buttons}>
                <button className={b.buy} onClick={() => dispatch(addToBasket(c))}>MUA NGAY</button>
                <button className={b.info} onClick={() => dispatch(showInfo(c))}>CHI TIẾT</button>
            </div>
        </div>
    )
    return (
        Cards
    )
}

export default CoffeeCards