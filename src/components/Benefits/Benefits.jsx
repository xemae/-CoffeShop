import React from "react";
import s from "./Benefits.module.css"
import source from "../../img/source.svg"
import quality from "../../img/quality.svg"
import coffee from "../../img/coffee.svg"
import preparation from "../../img/preparation.svg"

const Benefits = () => {
    return (
        <div className={s.benefitsBlock} id='benefits'>
            <div className={s.description}>
                <p>Your Personalized Coffee</p>
                <h1>COFFEE BUILD YOUR BASE</h1>
            </div>

            <div className={s.benefits}>
                <div className={s.benefit}>
                    <img src={source}/>
                    <h2>Nguồn gốc</h2>
                    <p>Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.</p>
                </div>
                <div className={s.benefit}>
                    <img src={quality}/>
                    <h2>Chất lượng</h2>
                    <p>Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê.</p>
                </div>
                <div className={s.benefit}>
                    <img src={coffee}/>
                    <h2>Các loại hạt</h2>
                    <p>70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean.</p>
                </div>
                <div className={s.benefit}>
                    <img src={preparation}/>
                    <h2>Pha chế</h2>
                    <p>Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt.</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits