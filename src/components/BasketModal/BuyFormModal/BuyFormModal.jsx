import React, {useCallback, useState} from "react";
import s from "./BuyFormModal.module.css"
import {useDispatch, useSelector} from "react-redux";
import {buy, setBuyForm} from "../../../reduxToolkit/toolkitSlice";

const BuyFormModal = () => {
    console.log('hey')

    const {isBuyFormShowed} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email: '',
        phone: ''
    })

    const changeHandler = useCallback((event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }, [form])

    const handlerSubmit = useCallback(async (event) => {
            dispatch(buy())
        }, [form]
    )

        return (
            <div className={s.byeContainer}>
                <div className={s.buy}>
                    <button className={s.close} onClick={() => dispatch(setBuyForm())}>&times;</button>
                    <form className={s.form} onSubmit={handlerSubmit}>
                        <input onChange={changeHandler} type="text" placeholder='Thư' name='email'/>
                        <input onChange={changeHandler} type={"text"} name={'phone'} placeholder='số điện thoại'/>
                        <button className={s.buyButton}>Buy</button>
                    </form>
                </div>
            </div>
        )
}

export default BuyFormModal