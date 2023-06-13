import React, { useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAll } from "../store/paymentSlice";
import { getItem, removeItems } from "../utils/StorageApi";
import { useAuth0 } from "@auth0/auth0-react";
import { removeAll as removeAllCart } from '../store/cartSlice';

const STRIPE_PUBLISHABLE = "";

const PAYMENT_SERVER_API = "https://foodbar-admin.onrender.com/payment";

const CURRENCY = "INR";

const Checkout = ({ name, description, amount, phone, address }) => {

  const { user } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const successPayment = (data) => {
    alert("Payment Successful");
    dispatch(removeAll());
    dispatch(removeAllCart());
    removeItems();
    navigate("/myaccount");
  };

  const errorPayment = (data) => {
    alert("Payment Error. Please try again");
    navigate('/cart');
  };

  const items = getItem();

  const onToken = (amount, description) => (token) => {
    const paymentData = {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: 100 * amount,
      user,
      phone,
      address,
      items,
    };
    axios
      .post(PAYMENT_SERVER_API, paymentData)
      .then((data) => {
        successPayment(data);
      })
      .catch(errorPayment);
  };



  return (
    <>
      {/* {notification && ( */}
      {/* )} */}
      <StripeCheckout
        name={name}
        description={description}
        amount={100 * amount}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
        email
        allowRememberMe
      />
    </>
  );
};

export default Checkout
