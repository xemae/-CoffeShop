import React from "react";
import s from "./BuyFormModal.modal.css"
import {useDispatch, useSelector} from "react-redux";
import {buy, hideBasket, minusItem, plusItem, removeFromBasket, showInfo} from "../../reduxToolkit/toolkitSlice";
import emptyBasket from '../../img/emptyBasket.png'

const BuyFormModal = () => {
    const {basket} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()


}

export default BuyFormModal