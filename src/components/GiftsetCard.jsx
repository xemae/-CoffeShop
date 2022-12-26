import React from "react";
import s from "./Giftset.module.css"
import b from "./Buttons.module.css"
import morning from "./img/morning.svg";
import origin from "./img/origin.svg";
import everyday from "./img/everyday.svg";
import revo from "./img/revo.svg";
import honey from "./img/honey.svg";
import natural from "./img/natural.svg";
import gift1 from "./img/gift1.svg";
import beans from "./img/coffeeBeans.svg";
import place from "./img/mountain.svg";

const GiftsetCard = (props) => {

    const ComboCards = [
        {
            id: 1,
            image: gift1,
            price: '285.000',
            title: 'Giftset "Cà phê phin Việt Nam"',
            description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
                '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
                '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
                '                    cho bạn.',
            beansTitile: 'Loại hạt',
            beansInfo: 'Fine Robusta Blend',
            placeTitle: 'Độ cao',
            placeInfo: '700 - 800m'
        },
        {
            id: 2,
            image: gift1,
            price: '285.000',
            title: '2 Giftset "Cà phê phin Việt Nam"',
            description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
                '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
                '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
                '                    cho bạn.',
            beansTitile: 'Loại hạt',
            beansInfo: 'Fine Robusta Blend',
            placeTitle: 'Độ cao',
            placeInfo: '700 - 800m'
        },
        {
            id: 3,
            image: gift1,
            price: '285.000',
            title: '3 Giftset "Cà phê phin Việt Nam"',
            description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
                '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
                '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
                '                    cho bạn.',
            beansTitile: 'Loại hạt',
            beansInfo: 'Fine Robusta Blend',
            placeTitle: 'Độ cao',
            placeInfo: '700 - 800m'
        },
    ]

    const Card = ComboCards.find(el => el.id === props.id)

    return (
        <div className={s.giftCard}>
            <img className={s.giftImage} src={Card.image}/>
            <div className={s.cardContent}>
                <h2>{Card.price}</h2>
                <h1>{Card.title}</h1>
                <p>{Card.description}</p>
                <div className={s.giftProperties}>
                    <div className={s.property}>
                        <img src={beans}/>
                        <div>
                            <h4>{Card.beansTitile}</h4>
                            <h3>{Card.beansInfo}</h3>
                        </div>
                    </div>
                    <div className={s.property}>
                        <img src={place}/>
                        <div>
                            <h4>{Card.placeTitle}</h4>
                            <h3>{Card.placeInfo}</h3>
                        </div>
                    </div>
                </div>
                <button className={b.buy}>MUA NGAY</button>
                <button className={b.info}>CHI TIẾT</button>
            </div>
        </div>
    )
}

export default GiftsetCard