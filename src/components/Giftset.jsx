import React from "react";
import s from "./Giftset.module.css"
import b from "./Buttons.module.css"
import gift1 from "./img/gift1.svg"
import beans from "./img/coffeeBeans.svg"
import place from "./img/mountain.svg"

const Giftset = () => {
    return (
        <div className={s.giftsetBlock}>
            <div className={s.desctiption}>
                <h2>Best Gift For Best Friend</h2>
                <h1>GIFTSET</h1>
            </div>
            <div className={s.slider}>
                <div className={s.giftCard}>
                    <img className={s.giftImage} src={gift1}/>
                    <div className={s.cardContent}>
                        <h2>285.000</h2>
                        <h1>Giftset "Cà phê phin Việt Nam"</h1>
                        <p>Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.</p>
                        <div className={s.giftProperties}>
                            <div className={s.property}>
                                <img src={beans}/>
                                <div>
                                    <h4>Loại hạt</h4>
                                    <h3>Fine Robusta Blend</h3>
                                </div>
                            </div>
                            <div  className={s.property}>
                                <img src={place}/>
                                <div>
                                    <h4>Độ cao</h4>
                                    <h3>700 - 800m</h3>
                                </div>
                            </div>
                        </div>
                        <button className={b.buy}>MUA NGAY</button>
                        <button className={b.info}>CHI TIẾT</button>
                    </div>
                    <div className={s.pages}>
                    <button className={s.active}>1</button>
                    <button>2</button>
                    <button>3</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Giftset