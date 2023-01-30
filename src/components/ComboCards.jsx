import React, {useState} from "react";
import s from "./Combo.module.css"
import b from "./Buttons.module.css"
import combo1 from "./img/combo1.svg"
import combo2 from "./img/combo2.svg"
import combo3 from "./img/combo3.svg"
import combo4 from "./img/combo4.svg"
import InfoModal from "./InfoModal";

const ComboCards = (props) => {
    const ComboCards = [
        {
            id: 1,
            image: combo1,
            price: '147.000',
            lastPrice: '155.000',
            title: 'Combo Revo Đậm Đà',
            description: 'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...',
            shortDescription: 'Revo Đậm Đà đủ mạnh',
            beansTitle: 'Loại hạt',
            beansInfo: 'Fine Robusta Blend',
            placeTitle: 'Độ cao',
            placeInfo: '700 - 800m'
        },
        {
            id: 2,
            image: combo2,
            price: '156.000',
            lastPrice: '165.000',
            title: 'Combo Revo Everyday',
            description: 'Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm...',
            shortDescription: 'Revo Đậm Đà đủ mạnh',
            beansTitle: 'Loại hạt',
            beansInfo: 'Fine Robusta Blend',
            placeTitle: 'Độ cao',
            placeInfo: '700 - 800m'
        },
        {
            id: 3,
            image: combo3,
            price: '275.000',
            lastPrice: '280.000',
            title: 'Combo Revo Honey',
            description: 'Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica...',
            shortDescription: 'Revo Đậm Đà đủ mạnh',
            beansTitle: 'Loại hạt',
            beansInfo: 'Fine Robusta Blend',
            placeTitle: 'Độ cao',
            placeInfo: '700 - 800m'
        },
        {
            id: 4,
            image: combo4,
            price: '249.000',
            lastPrice: '276.000',
            title: 'Combo Revo Honey',
            description: 'Revo Natural là dòng cà phê đặc biệt của Revo Coffee dành riêng ...',
            shortDescription: 'Revo Đậm Đà đủ mạnh',
            beansTitle: 'Loại hạt',
            beansInfo: 'Fine Robusta Blend',
            placeTitle: 'Độ cao',
            placeInfo: '700 - 800m'
        },
    ]

    // const [infoModal, setInfoModal] = useState(false);


    // if (props.infoModal) {
    //     return <InfoModal info={c}/>
    // }

    const onInfoClick = (c) => {
        props.setInfoModal(true)
        if (props.infoModal) {
            return <InfoModal info={c}/>
        }
    }

    const Cards = ComboCards.map(c =>
        <div key={c.id} className={s.comboCard}>
            <img src={c.image}/>
            <div className={s.cardContent}>
                <div className={s.cost}>
                    <h2>{c.price}</h2>
                    <s>{c.lastPrice}</s>
                </div>
                <h1>{c.title}</h1>
                <p>{c.description}</p>
                <button className={b.buy}>MUA NGAY</button>
                <button className={b.info} onClick={() => {
                    onInfoClick(c)
                }}>CHI TIẾT</button>
            </div>
        </div>
    )

    return (
        Cards
    )
}

export default ComboCards