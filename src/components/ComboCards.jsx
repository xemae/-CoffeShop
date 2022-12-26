import React from "react";
import s from "./Combo.module.css"
import b from "./Buttons.module.css"
import combo1 from "./img/combo1.svg"
import combo2 from "./img/combo2.svg"
import combo3 from "./img/combo3.svg"
import combo4 from "./img/combo4.svg"

const ComboCards = () => {

    const ComboCards = [
        {
            image: combo1,
            price: '147.000',
            lastPrice: '155.000',
            title: 'Combo Revo Đậm Đà',
            description: 'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...'
        },
        {
            image: combo2,
            price: '156.000',
            lastPrice: '165.000',
            title: 'Combo Revo Everyday',
            description: 'Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm...'
        },
        {
            image: combo3,
            price: '275.000',
            lastPrice: '280.000',
            title: 'Combo Revo Honey',
            description: 'Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica...'
        },
        {
            image: combo4,
            price: '249.000',
            lastPrice: '276.000',
            title: 'Combo Revo Honey',
            description: 'Revo Natural là dòng cà phê đặc biệt của Revo Coffee dành riêng ...'
        },
    ]

    const Cards = ComboCards.map(c =>
        <div className={s.comboCard}>
            <img src={c.image}/>
            <div className={s.cardContent}>
                <div className={s.cost}>
                    <h2>{c.price}</h2>
                    <s>{c.lastPrice}</s>
                </div>
                <h1>{c.title}</h1>
                <p>{c.description}</p>
                <button className={b.buy}>MUA NGAY</button>
                <button className={b.info}>CHI TIẾT</button>
            </div>
        </div>
    )
    return (
        Cards
    )
}

export default ComboCards