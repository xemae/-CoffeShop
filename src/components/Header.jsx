import React from "react";
import s from "./Header.module.css"
import logo from "./img/logo.svg"

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <img className={s.logo} src={logo}/>
                <h1>YOUR</h1>
                <h1 className={s.backgrounded}>PERSONALIZED</h1>
                <h1>COFFEE</h1>
            </div>
            <div className={s.nav}>
                <button className={s.basket}>
                    <p className={s.counter}>1</p>
                </button>
                <ul>
                    <li><p>TRANG CHỦ</p></li>
                    <li><a>COFFEE</a></li>
                    <li><a>PHIN MẠ MÀU</a></li>
                    <li><a>COMBO PHIN PHÊ</a></li>
                    <li><a>GIFTSET</a></li>
                    <li><a>LIÊN HỆ</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header