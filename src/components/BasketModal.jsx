import React, {useState} from "react";
import s from "./InfoModal.module.css"
import b from "./Buttons.module.css"
import beans from "./img/coffeeBeans.svg";
import place from "./img/mountain.svg";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, minusItem, plusItem, removeFromBasket, showOrHideInfo} from "../reduxToolkit/toolkitSlice";
import InfoModal from "./InfoModal";

const BasketModal = () => {
    // const [bShowed, setBShowed] = useState(false)

    // const {info} = props

    // const [infoModal, setInfoModal] = useState(false);
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
                    {/*<button className={b.buy} onClick={() => dispatch(plusItem(c))}>+</button>*/}
                    {/*<div className={s.count} >1</div>*/}
                    {/*<button className={b.info} onClick={() => dispatch(minusItem(c))}>-</button>*/}
                    <button className={b.info} onClick={() => dispatch(removeFromBasket(c))}>remove</button>

                </div>
            </div>
        )

        return (
            <div className={s.infoModalWrapper}>
                <div className={s.basketModal}>
                    {BasketCards}
                </div>
                {/*<div className={s.infoModal}>*/}

                {/*    <div className={s.info}>*/}
                {/*        <img src={info.image}/>*/}
                {/*        <h2>{info.price}</h2>*/}
                {/*        <h4>{info.lastPrice}</h4>*/}
                {/*        <h1>{info.title}</h1>*/}
                {/*        <h3>{info.shortDescription}</h3>*/}
                {/*        <p>{info.description}</p>*/}

                {/*        <div className={s.properties}>*/}
                {/*            <div className={s.property}>*/}
                {/*                <img src={beans}/>*/}
                {/*                <div>*/}
                {/*                    <h4>{info.beansTitle}</h4>*/}
                {/*                    <h3>{info.beansInfo}</h3>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className={s.property}>*/}
                {/*                <img src={place}/>*/}
                {/*                <div>*/}
                {/*                    <h4>{info.placeTitle}</h4>*/}
                {/*                    <h3>{info.placeInfo}</h3>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className={s.buttons}>*/}
                {/*        <button className={b.buy} onClick={() => dispatch(addToBasket(info))}>MUA NGAY</button>*/}
                {/*        /!*<button className={b.info}>CHI TIẾT</button>*!/*/}
                {/*    </div>*/}


                {/*</div>*/}
            </div>
        )
    }
}



export default BasketModal