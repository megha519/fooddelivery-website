import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose, } from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducers/restaurantReducer";
import { menuReducer } from "./reducers/menuReducers";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer, forgotPasswordReducer, useReducer } from "./reducers/useReducer";
import { myOrderReduce, newOrderReducer, orderDetailsReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus: menuReducer,
    cart: cartReducer,
    auth:authReducer,
    user:useReducer,
    forgotPassword:forgotPasswordReducer,
    newOrder:newOrderReducer,
    myorders:myOrderReduce,
    orderDetails:orderDetailsReducer,
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems") ?
            JSON.parse(localStorage.getItem("cartItems")) : []
        , deliveryInfo: localStorage.getItem("deliveryInfo") ?
            JSON.parse(localStorage.getItem("deliveryInfo")) : [],
    },
};

const composeenhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(reducer, initialState, composeenhancer(applyMiddleware(...middleware)));
export default store;