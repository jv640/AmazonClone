import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducers, productListReducers } from '../reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;
