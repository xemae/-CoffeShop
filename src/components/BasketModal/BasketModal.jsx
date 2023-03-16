import React from "react";
import s from "./BasketModal.module.css"
import {useDispatch, useSelector} from "react-redux";
import {
    hideBasket,
    minusItem,
    plusItem,
    removeFromBasket,
    setBuyForm,
    showInfo
} from "../../reduxToolkit/toolkitSlice";
import emptyBasket from '../../img/emptyBasket.png'
import BuyFormModal from "../BuyFormModal/BuyFormModal";

const BasketModal = () => {
    const {basket, isBasketShowed, totalPrice, discount, isBuyFormShowed} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()
    const setDiscount = (lastPrice) => {
        if (lastPrice !== undefined) {
            return lastPrice + '.00'
        }
    }

    if (isBasketShowed) {
        const BasketCards = basket.map(c =>
            <div key={c.id} className={s.basketCard}>
                <button className={s.removeItemBtn} onClick={() => dispatch(removeFromBasket(c))}>&#10005;</button>

                <div className={s.basketContent} onClick={() => dispatch(showInfo(c))}>
                    <img src={c.image}/>
                    <div className={s.cardDescription}>
                        <h1>{c.title}</h1>
                        <p>{c.description}</p>
                    </div>
                </div>

                <div className={s.cost}>
                    <s>{setDiscount(c.lastPrice)}</s>
                    <h2>{c.price + '.00'}</h2>
                </div>

                <div className={s.counter}>
                    <button className={s.changeCountBtn} onClick={() => dispatch(minusItem(c.id))}>-</button>
                    <div className={s.count}>{c.count}</div>
                    <button className={s.changeCountBtn} onClick={() => dispatch(plusItem(c.id))}>+</button>
                </div>

                <div className={s.sumPrice}><h2>{c.sumPrice + '.00'}</h2></div>

            </div>
        )

        if (basket.length === 0) {
            return (
                <div className={s.basketModalWrapper} onClick={() => dispatch(hideBasket())}>
                    <div className={s.basketModal} onClick={e => e.stopPropagation()}>
                        <button className={s.close} onClick={() => dispatch(hideBasket())}>&times;</button>
                        <div>
                            <img className={s.emptyBasket} src={emptyBasket}/>
                        </div>
                    </div>
                </div>
            )
        }

        if(isBuyFormShowed) {
            return (
                <BuyFormModal/>
            )
        }

        return (
            <div className={s.basketModalWrapper} onClick={() => dispatch(hideBasket())}>
                <div className={s.basketModal} onClick={e => e.stopPropagation()}>
                    <button className={s.close} onClick={() => dispatch(hideBasket())}>&times;</button>

                    {BasketCards}

                    <div className={s.buyWrap}>
                        <div className={s.buyContainer}>
                            <div className={s.discount}>
                                <h3>скидка</h3>
                                <h2>{discount}</h2>
                            </div>
                            <div className={s.totalPrice}>
                                <h3>totalPrice</h3>
                                <h2>{totalPrice + '.00'}</h2>
                            </div>

                            {/*<BuyFormModal/>*/}

                            <button
                                className={s.buyAll}
                                onClick={() => dispatch(setBuyForm())}
                            >Buy</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default BasketModal