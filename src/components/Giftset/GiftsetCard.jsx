import React from "react";
import s from "./Giftset.module.css"
import b from "../Buttons.module.css"
// import morning from "../img/morning.svg";
// import origin from "../img/origin.svg";
// import everyday from "../img/everyday.svg";
// import revo from "../img/revo.svg";
// import honey from "../img/honey.svg";
// import natural from "../img/natural.svg";
// import gift1 from "../img/gift1.svg";
import beans from "../img/coffeeBeans.svg";
import place from "../img/mountain.svg";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, showOrHideInfo} from "../../reduxToolkit/toolkitSlice";

const GiftsetCard = (props) => {

    const cards = useSelector(state => state.toolkit.cards.filter(i => i.type === 'gift'))
    const dispatch = useDispatch()
    // console.log(props.id)

    const card = cards.find(el => el.id == props.id )

    return (
        <div className={s.giftCard}>
            <img className={s.giftImage} src={card.image}/>
            <div className={s.cardContent}>
                <h2>{card.price}</h2>
                <h1>{card.title}</h1>
                <p>{card.description}</p>
                <div className={s.giftProperties}>
                    <div className={s.property}>
                        <img src={beans}/>
                        <div>
                            <h4>{card.beansTitle}</h4>
                            <h3>{card.beansInfo}</h3>
                        </div>
                    </div>
                    <div className={s.property}>
                        <img src={place}/>
                        <div>
                            <h4>{card.placeTitle}</h4>
                            <h3>{card.placeInfo}</h3>
                        </div>
                    </div>
                </div>
                <button className={b.buy} onClick={() => dispatch(addToBasket(card))}>MUA NGAY</button>
                <button className={b.info} onClick={() => dispatch(showOrHideInfo(card))}>CHI TIẾT</button>
            </div>
        </div>
    )
}

export default GiftsetCard