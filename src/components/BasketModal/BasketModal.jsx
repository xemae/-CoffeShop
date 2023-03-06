import React from "react";
import s from "./BasketModal.module.css"
import {useDispatch, useSelector} from "react-redux";
import {hideBasket, minusItem, plusItem, removeFromBasket, showInfo} from "../../reduxToolkit/toolkitSlice";
import b from "../styles/Buttons.module.css";
import emptyBasket from '../../img/emptyBasket.png'

const BasketModal = () => {
    const {basket, isBasketShowed, totalPrice, discount} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()

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
                    {/*добавить Classnames, lastPrice мб undefined */}
                    <s>{c.lastPrice + '.00'}</s>
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

        return (
            <div className={s.basketModalWrapper} onClick={() => dispatch(hideBasket())}>
                <div className={s.basketModal} onClick={e => e.stopPropagation()}>
                    <button className={s.close} onClick={() => dispatch(hideBasket())}>&times;</button>

                    <div className={s.columnsNames}>
                        <h1>товар</h1>
                        <h1>цена</h1>
                        <h1>количество</h1>
                        <h1>подытог</h1>
                    </div>

                    {BasketCards}

                    <div className={s.buyWrap}>
                        <div className={s.buyContainer}>
                            <div className={s.discount}>
                                <h3>скидка</h3>
                                <h2>{'- ' + discount + '.00'}</h2>
                            </div>
                            <div className={s.totalPrice}>
                                <h3>totalPrice</h3>
                                <h2>{totalPrice + '.00'}</h2>
                            </div>

                            <button className={s.buyAll}>Buy</button>
                        </div>


                    </div>


                </div>
            </div>
        )
    }
}

export default BasketModal