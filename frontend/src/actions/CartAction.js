import Cookies from 'js-cookie';

const {default: Axios} = require("axios");
const {ADD_CART_ITEM, REMOVE_CART_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT} = require("../constants/cartConstants");

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await Axios.get("/api/products/" + productId);
        dispatch({
            type: ADD_CART_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });
        const {cart: {cartItems}} = getState();
        Cookies.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {
        
    }
}

const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: productId });

  const { cart: { cartItems } } = getState();
  Cookies.set("cartItems", JSON.stringify(cartItems));
}
const saveShipping = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
}
const savePayment = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT, payload: data });
}

export { addToCart, removeFromCart, saveShipping, savePayment }
