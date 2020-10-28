import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {productDeleteReducers, productDetailsReducers, productListReducers, productReviewSaveReducer, productSaveReducers} from '../reducers/productReducers';
import {cartReducer} from '../reducers/cartReducers';
import Cookie from 'js-cookie';
import {userRegisterReducer, userSigninReducer, userUpdateReducer} from '../reducers/userReducers';
import {myOrderListReducer, orderCreateReducer, orderDeleteReducer, orderDetailsReducer, orderListReducer, orderPayReducer} from '../reducers/orderReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {cart: {cartItems, shipping: {}, payment: {}}, userSignin: {userInfo}};

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducers,
    productDelete: productDeleteReducers,
    productReviewSave: productReviewSaveReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
