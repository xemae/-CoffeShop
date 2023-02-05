import React from "react";
import s from "./Coffee.module.css"
import b from "../Buttons.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, showOrHideInfo} from "../../reduxToolkit/toolkitSlice";

const CoffeeCards = () => {

    // const ComboCards = [
    //     {
    //         id: 1,
    //         image: morning,
    //         price: '99.000',
    //         title: 'REVO Morning',
    //         description: 'đắng, hậu ngọt, hương hoa '
    //     },
    //     {
    //         id: 2,
    //         image: origin,
    //         price: '139.000',
    //         title: 'REVO Origin',
    //         description: 'hậu ngọt, ít đắng, vị chua dâu'
    //     },
    //     {
    //         id: 3,
    //         image: everyday,
    //         price: '85.000',
    //         title: 'REVO Everyday',
    //         description: 'cân bằng, hậu đắng, vị chocolate '
    //     },
    //     {
    //         id: 4,
    //         image: revo,
    //         price: '75.000',
    //         title: 'REVO Đậm Đà',
    //         description: 'đậm đà, đắng, truyền thống'
    //     },
    //     {
    //         id: 5,
    //         image: honey,
    //         price: '195.000',
    //         title: 'REVO Honey',
    //         description: 'độ ngọt cao, hậu ngọt, chua họ táo'
    //     },
    //     {
    //         id: 6,
    //         image: natural,
    //         price: '169.000',
    //         title: 'REVO Natural',
    //         description: 'hậu ngọt, hương hoa, vị chua dâu'
    //     },
    // ]


    // const basket = useSelector(state => state.toolkit.basket)
    const cards = useSelector(state => state.toolkit.cards.filter(i => i.type === 'coffee'))
    const dispatch = useDispatch()
    // const cardsSet = cards.filter(i => i.type === 'coffee')
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