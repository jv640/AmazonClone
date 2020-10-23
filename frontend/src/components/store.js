import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {productDetailsReducers, productListReducers} from '../reducers/productReducers';
import {cartReducer} from '../reducers/cartReducers';
import Cookie from 'js-cookie';
import {userSigninReducer} from '../reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {cart: {cartItems}};
const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    userSignin: userSigninReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
