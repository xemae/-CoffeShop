import React from "react";
import s from "./Coffee.module.css"
import b from "./Buttons.module.css"
import morning from "./img/morning.svg";
import origin from "./img/origin.svg";
import everyday from "./img/everyday.svg";
import revo from "./img/revo.svg";
import honey from "./img/honey.svg";
import natural from "./img/natural.svg";

const CoffeeCards = () => {

    const ComboCards = [
        {
            image: morning,
            price: '99.000',
            title: 'REVO Morning',
            description: 'đắng, hậu ngọt, hương hoa '
        },
        {
            image: origin,
            price: '139.000',
            title: 'REVO Origin',
            description: 'hậu ngọt, ít đắng, vị chua dâu'
        },
        {
            image: everyday,
            price: '85.000',
            title: 'REVO Everyday',
            description: 'cân bằng, hậu đắng, vị chocolate '
        },
        {
            image: revo,
            price: '75.000',
            title: 'REVO Đậm Đà',
            description: 'đậm đà, đắng, truyền thống'
        },
        {
            image: honey,
            price: '195.000',
            title: 'REVO Honey',
            description: 'độ ngọt cao, hậu ngọt, chua họ táo'
        },
        {
            image: natural,
            price: '169.000',
            title: 'REVO Natural',
            description: 'hậu ngọt, hương hoa, vị chua dâu'
        },
    ]

    const Cards = ComboCards.map(c =>
        <div className={s.slide}>
            <div className={s.card}>
                <img src={c.image}/>
                <div className={s.cardContent}>
                    <h2>{c.price}</h2>
                    <h1>{c.title}</h1>
                    <p>{c.description}</p>
                    <button className={b.buy}>MUA NGAY</button>
                    <button className={b.info}>CHI TIẾT</button>
                </div>
            </div>
        </div>
    )
    return (
        Cards
    )
}

export default CoffeeCards