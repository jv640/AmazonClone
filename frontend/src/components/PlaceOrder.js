import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from './CheckOutSteps';
import { createOrder } from '../actions/orderAction';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {REACT_APP_STRIPE_PS_KEY} from '../config/keys';

function PlaceOrder(props) {

  const cart = useSelector(state => state.cart);
  const orderCreate = useSelector(state => state.orderCreate);
  const userSignin = useSelector(state => state.userSignin);
  const {loading, userInfo, error} = userSignin;
  // console.log('orderCreat', orderCreate)
  const { success, order } = orderCreate;

  const {cartItems, shipping, payment} = cart;
  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const dispatch = useDispatch();
 
  const placeOrderHandler = () => {
    dispatch(createOrder({
      orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,
      taxPrice, totalPrice, userInfo
    }));
  }

  useEffect(() => {
    if (success) {
      
    }

  }, [success]);


  const makePayment = (token) => {
    // console.log(token);
    const product = {
      'product': "Cart"
    }
    const body = {
      token,
      product
    }
    axios.post('/api/orders/payment', body)
      .then((response) => {
        // console.log('response', response)
        placeOrderHandler();
        // console.log(order)
        props.history.push("/order/");
        // console.log('Success', success)
      })
      .catch(err => console.log(err))
  }

  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>
            Shipping
          </h3>
          <div>
            {cart.shipping.address}, {cart.shipping.city},
          {cart.shipping.postal}, {cart.shipping.country},
          </div>
        </div>
        <div>
          <h3>Payment</h3>
          <div>
            Payment Method: {cart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>
                Shopping Cart
          </h3>
              <div>
                Price
          </div>
            </li>
            {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cartItems.map(item =>
                  <li key={item._id}>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>
                          {item.name}
                        </Link>

                      </div>
                      <div>
                        Qty: {item.qty}
                      </div>
                    </div>
                    <div className="cart-price">
                      ${item.price}
                    </div>
                  </li>
                )
            }
          </ul>
        </div>


      </div>
      <div className="placeorder-action">
        <ul>
          <li>
            {/* <button className="button primary full-width" onClick={placeOrderHandler} >Place Order</button> */}
            <StripeCheckout
              stripeKey={REACT_APP_STRIPE_PS_KEY}
              token={makePayment}
              name="Amazona"
              currency="INR"
              billingAddress={true}
              amount={totalPrice*100}  >
              <button className="btn-large pink">Order RS {totalPrice} </button>
            </StripeCheckout>
          </li>
          <li>
            <h3>Order Summary</h3>
          </li>
          <li>
            <div>Items</div>
            <div>${itemsPrice}</div>
          </li>
          <li>
            <div>Shipping</div>
            <div>${shippingPrice}</div>
          </li>
          <li>
            <div>Tax</div>
            <div>${taxPrice}</div>
          </li>
          <li>
            <div>Order Total</div>
            <div>${totalPrice}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>

}

export default PlaceOrder;