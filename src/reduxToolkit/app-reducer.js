// // import React from "react";
// import {createAction, createReducer} from "@reduxjs/toolkit"
// import combo1 from "../components/img/combo1.svg";
// import combo2 from "../components/img/combo2.svg";
// import combo3 from "../components/img/combo3.svg";
// import combo4 from "../components/img/combo4.svg";
// import gift1 from "../components/img/gift1.svg";
// import morning from "../components/img/morning.svg";
// import origin from "../components/img/origin.svg";
// import everyday from "../components/img/everyday.svg";
// import revo from "../components/img/revo.svg";
// import honey from "../components/img/honey.svg";
// import natural from "../components/img/natural.svg";
//
//
//
// const initialState = {
//     isInfoShowed: false,
//     isBasketShowed: false,
//     basketCounter: 0,
//     basket: [],
//     cards: [
//         {
//             id: 1,
//             image: combo1,
//             price: '147.000',
//             lastPrice: '155.000',
//             title: 'Combo Revo Đậm Đà',
//             description: 'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...',
//             shortDescription: 'Revo Đậm Đà đủ mạnh',
//             beansTitle: 'Loại hạt',
//             beansInfo: 'Fine Robusta Blend',
//             placeTitle: 'Độ cao',
//             placeInfo: '700 - 800m'
//         },
//         {
//             id: 2,
//             image: combo2,
//             price: '156.000',
//             lastPrice: '165.000',
//             title: 'Combo Revo Everyday',
//             description: 'Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm...',
//             shortDescription: 'Revo Đậm Đà đủ mạnh',
//             beansTitle: 'Loại hạt',
//             beansInfo: 'Fine Robusta Blend',
//             placeTitle: 'Độ cao',
//             placeInfo: '700 - 800m'
//         },
//         {
//             id: 3,
//             image: combo3,
//             price: '275.000',
//             lastPrice: '280.000',
//             title: 'Combo Revo Honey',
//             description: 'Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica...',
//             shortDescription: 'Revo Đậm Đà đủ mạnh',
//             beansTitle: 'Loại hạt',
//             beansInfo: 'Fine Robusta Blend',
//             placeTitle: 'Độ cao',
//             placeInfo: '700 - 800m'
//         },
//         {
//             id: 4,
//             image: combo4,
//             price: '249.000',
//             lastPrice: '276.000',
//             title: 'Combo Revo Honey',
//             description: 'Revo Natural là dòng cà phê đặc biệt của Revo Coffee dành riêng ...',
//             shortDescription: 'Revo Đậm Đà đủ mạnh',
//             beansTitle: 'Loại hạt',
//             beansInfo: 'Fine Robusta Blend',
//             placeTitle: 'Độ cao',
//             placeInfo: '700 - 800m'
//         },
//         {
//             id: 5,
//             image: gift1,
//             price: '285.000',
//             title: 'Giftset "Cà phê phin Việt Nam"',
//             description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
//                 '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
//                 '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
//                 '                    cho bạn.',
//             beansTitle: 'Loại hạt',
//             beansInfo: 'Fine Robusta Blend',
//             placeTitle: 'Độ cao',
//             placeInfo: '700 - 800m'
//         },
//         {
//             id: 6,
//             image: gift1,
//             price: '285.000',
//             title: '2 Giftset "Cà phê phin Việt Nam"',
//             description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
//                 '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
//                 '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
//                 '                    cho bạn.',
//             beansTitle: 'Loại hạt',
//             beansInfo: 'Fine Robusta Blend',
//             placeTitle: 'Độ cao',
//             placeInfo: '700 - 800m'
//         },
//         {
//             id: 7,
//             image: gift1,
//             price: '285.000',
//             title: '3 Giftset "Cà phê phin Việt Nam"',
//             description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
//                 '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
//                 '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
//                 '                    cho bạn.',
//             beansTitle: 'Loại hạt',
//             beansInfo: 'Fine Robusta Blend',
//             placeTitle: 'Độ cao',
//             placeInfo: '700 - 800m'
//         }
//     ]
//
// };
//
// export const showOrHideInfo = createAction("SHOW_OR_HIDE_INFO")
// export const showOrHideBasket = createAction("SHOW_OR_HIDE_BASKET")
// export const addToBasket = createAction("ADD_TO_BASKET")
// export const removeFromBasket = createAction("REMOVE_FROM_BASKET")
//
//
// export default createReducer (initialState, {
//     [showOrHideInfo]: function (state) {
//         state.showOrHideInfo = !state.showOrHideInfo
//     },
//     [showOrHideBasket]: function (state) {
//         state.isBasketShowed = !state.isBasketShowed
//     },
//     [addToBasket]: function (state) {
//         state.addToBasket = state.basketCounter++
//     },
//     [removeFromBasket]: function (state) {
//         state.removeFromBasketToBasket = state.basketCounter--
//     },
// })
//
// console.log(showOrHideBasket)