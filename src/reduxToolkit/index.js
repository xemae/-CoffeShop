import {createStore} from "redux"
import appReducer from "./app-reducer";


// let reducers = combineReducers({
//     appReducer
// })
const store = createStore(appReducer)

// let store = createStore (reducers)

export default store