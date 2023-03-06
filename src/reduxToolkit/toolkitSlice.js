import {createSlice, current} from "@reduxjs/toolkit";
import combo1 from "../img/combo1.svg";
import combo2 from "../img/combo2.svg";
import combo3 from "../img/combo3.svg";
import combo4 from "../img/combo4.svg";
import gift1 from "../img/gift1.svg";
import morning from "../img/morning.svg";
import origin from "../img/origin.svg";
import everyday from "../img/everyday.svg";
import revo from "../img/revo.svg";
import honey from "../img/honey.svg";
import natural from "../img/natural.svg";
import InfoModal from "../components/InfoModal/InfoModal";
// import {addToBasket, removeFromBasket, showOrHideBasket, showOrHideInfo} from "./app-reducer";

const toolkitSlice = createSlice({
        name: 'toolkit',
        initialState: {
            showedCard: null,
            isBasketShowed: false,
            basketCounter: 0,
            basket: [],
            totalPrice: 0,
            discount: 0,
            cards: [
                {
                    id: 1,
                    type: 'gift',
                    count: 0,
                    image: gift1,
                    // price: '285.000',
                    price: 285.000,
                    sumPrice: 0,
                    title: 'Giftset "Cà phê phin Việt Nam"',
                    description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
                        '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
                        '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
                        '                    cho bạn.',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 2,
                    type: 'gift',
                    count: 0,
                    image: gift1,
                    price: 285.000,
                    sumPrice: 0,
                    title: '2 Giftset "Cà phê phin Việt Nam"',
                    description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
                        '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
                        '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
                        '                    cho bạn.',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 3,
                    type: 'gift',
                    count: 0,
                    image: gift1,
                    price: 285.000,
                    sumPrice: 0,
                    title: '3 Giftset "Cà phê phin Việt Nam"',
                    description: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,\n' +
                        '                    rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình\n' +
                        '                    yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng\n' +
                        '                    cho bạn.',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 4,
                    type: 'coffee',
                    count: 0,
                    image: morning,
                    price: 99.000,
                    sumPrice: 0,
                    title: 'REVO Morning',
                    description: 'đắng, hậu ngọt, hương hoa ',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 5,
                    type: 'coffee',
                    count: 0,
                    image: origin,
                    price: 139.000,
                    sumPrice: 0,
                    title: 'REVO Origin',
                    description: 'hậu ngọt, ít đắng, vị chua dâu',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 6,
                    type: 'coffee',
                    count: 0,
                    image: everyday,
                    price: 85.000,
                    sumPrice: 0,
                    title: 'REVO Everyday',
                    description: 'cân bằng, hậu đắng, vị chocolate ',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 7,
                    type: 'coffee',
                    count: 0,
                    image: revo,
                    price: 75.000,
                    sumPrice: 0,
                    title: 'REVO Đậm Đà',
                    description: 'đậm đà, đắng, truyền thống',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 8,
                    type: 'coffee',
                    count: 0,
                    image: honey,
                    price: 195.000,
                    sumPrice: 0,
                    title: 'REVO Honey',
                    description: 'độ ngọt cao, hậu ngọt, chua họ táo',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 9,
                    type: 'coffee',
                    count: 0,
                    image: natural,
                    price: 169.000,
                    sumPrice: 0,
                    title: 'REVO Natural',
                    description: 'hậu ngọt, hương hoa, vị chua dâu',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 10,
                    type: 'combo',
                    count: 0,
                    image: combo1,
                    price: 147.000,
                    sumPrice: 0,
                    lastPrice: 155.000,
                    title: 'Combo Revo Đậm Đà',
                    description: 'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...',
                    shortDescription: 'Revo Đậm Đà đủ mạnh',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 11,
                    type: 'combo',
                    count: 0,
                    image: combo2,
                    price: 156.000,
                    sumPrice: 0,
                    lastPrice: 165.000,
                    title: 'Combo Revo Everyday',
                    description: 'Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm...',
                    shortDescription: 'Revo Đậm Đà đủ mạnh',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 12,
                    type: 'combo',
                    count: 0,
                    image: combo3,
                    price: 275.000,
                    sumPrice: 0,
                    lastPrice: 280.000,
                    title: 'Combo Revo Honey',
                    description: 'Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica...',
                    shortDescription: 'Revo Đậm Đà đủ mạnh',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
                {
                    id: 13,
                    type: 'combo',
                    count: 0,
                    image: combo4,
                    price: 249.000,
                    sumPrice: 0,
                    lastPrice: 276.000,
                    title: 'Combo Revo Honey',
                    description: 'Revo Natural là dòng cà phê đặc biệt của Revo Coffee dành riêng ...',
                    shortDescription: 'Revo Đậm Đà đủ mạnh',
                    beansTitle: 'Loại hạt',
                    beansInfo: 'Fine Robusta Blend',
                    placeTitle: 'Độ cao',
                    placeInfo: '700 - 800m'
                },
            ]
        },
        reducers: {
            showInfo(state, action) {
                state.showedCard = action.payload
            },
            hideInfo(state) {
                state.showedCard = null
            },
            showBasket(state) {
                state.isBasketShowed = true
            },
            hideBasket(state) {
                state.isBasketShowed = false
            },
            addToBasket(state, action) {
                let newItem = {...action.payload}
                const itemOnBasket = state.basket.find(item => item.id === newItem.id)
                if (itemOnBasket !== undefined) {
                    itemOnBasket.count = itemOnBasket.count + 1
                    itemOnBasket.sumPrice = itemOnBasket.sumPrice + itemOnBasket.price
                    state.totalPrice = state.totalPrice + itemOnBasket.price
                    if (itemOnBasket.lastPrice) {
                        state.discount = state.discount + (itemOnBasket.lastPrice - itemOnBasket.price)
                    }
                }
                else {
                    state.basket.push(newItem)
                    newItem.count = newItem.count + 1
                    state.basketCounter = state.basketCounter + 1
                    newItem.sumPrice = newItem.sumPrice + newItem.price
                    state.totalPrice = state.totalPrice + newItem.price
                    if (newItem.lastPrice) {
                        state.discount = state.discount + (newItem.lastPrice - newItem.price)
                    }
                }
            },
            removeFromBasket(state, action) {
                state.basketCounter = state.basketCounter - 1
                state.basket = state.basket.filter(el => el.id !== action.payload.id)
                state.totalPrice = state.totalPrice-action.payload.sumPrice

                if (action.payload.lastPrice) {
                    state.discount = state.discount - (action.payload.lastPrice - action.payload.price)
                }

            },
            plusItem(state, action) {
                let incrementedItem = state.basket.find(card => card.id === action.payload)
                incrementedItem.count = incrementedItem.count + 1
                incrementedItem.sumPrice = incrementedItem.sumPrice + incrementedItem.price
                state.totalPrice = state.totalPrice + incrementedItem.price
                if (incrementedItem.lastPrice) {
                    state.discount = state.discount + (incrementedItem.lastPrice - incrementedItem.price)
                }
            },
            minusItem(state, action) {
                let decrementedItem = state.basket.find(card => card.id === action.payload)
                if(decrementedItem.count === 1) {
                    state.basketCounter = state.basketCounter - 1
                    state.basket = state.basket.filter(el => el.id !== action.payload)
                }
                decrementedItem.count = decrementedItem.count - 1
                decrementedItem.sumPrice = decrementedItem.sumPrice - decrementedItem.price
                state.totalPrice = state.totalPrice - decrementedItem.price
                if (decrementedItem.lastPrice) {
                    state.discount = state.discount - (decrementedItem.lastPrice - decrementedItem.price)
                }
            },
        }
    }
)

export default toolkitSlice.reducer

export const {
    showInfo, hideInfo, addToBasket, removeFromBasket,
    hideBasket, showBasket,
    plusItem,
    minusItem
} = toolkitSlice.actions