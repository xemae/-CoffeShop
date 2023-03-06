import React from "react";
import s from "./BasketModal.module.css"
import {useDispatch, useSelector} from "react-redux";
import {hideBasket, minusItem, plusItem, removeFromBasket, showInfo} from "../../reduxToolkit/toolkitSlice";
import b from "../styles/Buttons.module.css";

const BasketModal = () => {
    const {basket, isBasketShowed, totalPrice} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()

    if (isBasketShowed) {
        const BasketCards = basket.map(c =>
            <div key={c.id} className={s.basketCard}>
                <img src={c.image}/>
                <div className={s.basketContent}>
                    <div className={s.cost}>
                        <h2>{c.price + '.00'}</h2>
                        {/*добавить Classnames, lastPrice мб undefined */}
                        <s>{c.lastPrice + '.00'}</s>
                        <h2>сумма {c.sumPrice}</h2>
                    </div>
                    <h1>{c.title}</h1>
                    <p>{c.description}</p>
                    <button className={b.info} onClick={() => dispatch(showInfo(c))}>CHI TIẾT</button>
                    <button className={s.changeCountBtn} onClick={() => dispatch(removeFromBasket(c))}>remove</button>
                    <button className={s.changeCountBtn} onClick={() => dispatch(minusItem(c.id))}>-</button>
                    <p>{c.count}</p>
                    <button className={s.changeCountBtn} onClick={() => dispatch(plusItem(c.id))}>+</button>

                </div>
            </div>
        )

        return (
            <div className={s.basketModalWrapper} onClick={() => dispatch(hideBasket())}>
                <div className={s.basketModal} onClick={e => e.stopPropagation()}>
                    <button className={s.close} onClick={() => dispatch(hideBasket())}>&times;</button>
                    <div>
                        {BasketCards}
                    </div>
                    <div> totalPrice - {totalPrice}</div>
                </div>
            </div>
        )
    }
}

export default BasketModal