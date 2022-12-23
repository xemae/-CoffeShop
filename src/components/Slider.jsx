import React from "react";
import s from "./Slider.module.css"
import b from "./Buttons.module.css"
import morning from "./img/morning.svg"

const Slider = () => {
    return (
        <div className={s.sliderBlock}>
            <div className={s.sliderInfo}>
                <h2>Choose Your Favorite</h2>
                <h1>CHUẨN GU ĐÚNG VỊ</h1>
            </div>
            <div className={s.slider}>
                <div className={s.slide}>
                    <div className={s.card}>
                        <img src={morning}/>
                        <div className={s.cardContent}>
                            <h2>99.000</h2>
                            <h1>REVO Morning</h1>
                            <p>đắng, hậu ngọt, hương hoa </p>
                            <button className={b.buy}>MUA NGAY</button>
                            <button className={b.info}>CHI TIẾT</button>
                        </div>
                    </div>

                    <div className={s.card}>
                        <img src={morning}/>
                        <div className={s.cardContent}>
                            <h2>99.000</h2>
                            <h1>2 REVO Morning</h1>
                            <p>đắng, hậu ngọt, hương hoa </p>
                            <button className={b.buy}>MUA NGAY</button>
                            <button className={b.info}>CHI TIẾT</button>
                        </div>
                    </div>

                    <div className={s.card}>
                        <img src={morning}/>
                        <div className={s.cardContent}>
                            <h2>99.000</h2>
                            <h1>REVO Morning</h1>
                            <p>đắng, hậu ngọt, hương hoa </p>
                            <button className={b.buy}>MUA NGAY</button>
                            <button className={b.info}>CHI TIẾT</button>
                        </div>
                    </div>

                    <div className={s.card}>
                        <img src={morning}/>
                        <div className={s.cardContent}>
                            <h2>99.000</h2>
                            <h1>REVO Morning</h1>
                            <p>đắng, hậu ngọt, hương hoa </p>
                            <button className={b.buy}>MUA NGAY</button>
                            <button className={b.info}>CHI TIẾT</button>
                        </div>
                    </div>


                </div>

                <div className={s.slide}>
                    <div className={s.card}>
                        <img src={morning}/>
                        <div className={s.cardContent}>
                            <h2>99.000</h2>
                            <h1>REVO Morning</h1>
                            <p>đắng, hậu ngọt, hương hoa </p>
                            <button className={b.buy}>MUA NGAY</button>
                            <button className={b.info}>CHI TIẾT</button>
                        </div>
                    </div>

                    <div className={s.card}>
                        <img src={morning}/>
                        <div className={s.cardContent}>
                            <h2>99.000</h2>
                            <h1>REVO Morning</h1>
                            <p>đắng, hậu ngọt, hương hoa </p>
                            <button className={b.buy}>MUA NGAY</button>
                            <button className={b.info}>CHI TIẾT</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Slider