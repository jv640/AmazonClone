import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {productDeleteReducers, productDetailsReducers, productListReducers, productSaveReducers} from '../reducers/productReducers';
import {cartReducer} from '../reducers/cartReducers';
import Cookie from 'js-cookie';
import {userRegisterReducer, userSigninReducer} from '../reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {cart: {cartItems}, userSignin: {userInfo} };
const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducers,
    productDelete: productDeleteReducers
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
