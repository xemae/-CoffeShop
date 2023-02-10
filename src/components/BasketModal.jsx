import React, {useState} from "react";
import s from "./BasketModal.module.css"
import {useDispatch, useSelector} from "react-redux";
import {removeFromBasket, showOrHideBasket} from "../reduxToolkit/toolkitSlice";

const BasketModal = () => {
    const basket = useSelector(state => state.toolkit.basket)
    const basketShowed = useSelector(state => state.toolkit.isBasketShowed)
    const dispatch = useDispatch()

    if (basketShowed === true) {
        const BasketCards = basket.map(c =>
            <div key={c.id} className={s.basketCard}>
                <img src={c.image}/>
                <div className={s.basketContent}>
                    <div className={s.cost}>
                        <h2>{c.price}</h2>
                        <s>{c.lastPrice}</s>
                    </div>
                    <h1>{c.title}</h1>
                    <p>{c.description}</p>
                    <button className={s.removeButton} onClick={() => dispatch(removeFromBasket(c))}>remove</button>
                </div>
            </div>
        )

        return (
            <div className={s.basketModalWrapper} onClick={() => dispatch(showOrHideBasket())}>
                <div className={s.basketModal}>
                    <button className={s.close} onClick={() => dispatch(showOrHideBasket())}>&times;</button>
                    <div onClick={() => dispatch(showOrHideBasket())}>
                        {BasketCards}
                    </div>
                </div>
            </div>
        )
    }
}

export default BasketModal