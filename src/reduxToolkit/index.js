import {combineReducers, configureStore} from "@reduxjs/toolkit"
import appReducer from './app-reducer'


// let reducers = combineReducers({
//     appReducer
// })
const rootReducer = combineReducers({
    toolkit: appReducer
})

export const store = configureStore({
    reducer: rootReducer
})

// let index = createStore (reducers)

// export default index