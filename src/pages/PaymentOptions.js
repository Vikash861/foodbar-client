import { useState } from 'react'
import Checkout from "../components/Checkout";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeAll } from "../store/paymentSlice";
import { getItem, removeItems } from "../utils/StorageApi";
import { removeAll as removeAllCart } from '../store/cartSlice';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

const baseURL = 'https://foodbar-admin.onrender.com'


export const PaymentsOptions = () => {
  const { phone, address, price } = useSelector(state => state.payment);
  const navigate = useNavigate()
  const location = useLocation();
  const { fromCart } = location.state || {};
  console.log(address)

  const [showPage, setShowPage] = useState(false)

  const item = getItem();

  useEffect(() => {
    if (fromCart) setShowPage(true)
    else if (item.length > 0) navigate('/cart')
    else navigate('/')
  }, [])



  const [options, setOptions] = useState('cash');

  const handleChange = event => {
    setOptions(event.target.value)
  }

  const dispatch = useDispatch();

  const successPayment = (data) => {
    alert("Payment Successful");
    dispatch(removeAll());
    dispatch(removeAllCart())
    removeItems()
    navigate("/myaccount");
  };
  const errorPayment = (data) => {
    alert("Payment Error Try again");
    navigate('/cart')
  };

  const items = getItem()
  const { user } = useAuth0();
  const paymentData = {
    user,
    phone,
    address,
    items,
    price
  };

  const handleClick = () => {
    axios.post(`${baseURL}/paymentcash`, paymentData)
      .then((data) => {
        successPayment(data);

      })
      .catch(errorPayment);
  }



  return (
    <>
      {
        showPage && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2 mt-8 justify-center">
              <label htmlFor="paymentOptions">Available Options:</label>
              <select name="paymentOptions" id="paymentOptions" onChange={handleChange}>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
              </select>
            </div>
            {
              options === "card" ? (
                <>
                  <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                    <p>After paying please do not refresh page until result arived</p>
                  </div>
                  <Checkout name="Foodbar" description="Hungry Order Fast" amount={Number(price)} phone={phone} address={address} />
                </>
              ) : (
                <button className=' w-fit relative overflow-hidden bg-custom-red text-white px-6 py-2 rounded lg:rounded-3xl' onClick={handleClick}>
                  Proceed
                </button>
              )
            }


            <div className='mt-12 p-4 border border-custom-red rounded flex flex-col justify-center items-center'>

              <h2 className="mt-8 mb-2 text-xl bold">Test Card Details</h2>
              <ul className="flex flex-col gap-1">
                <li>Card Number : 4242 4242 4242 4242</li>
                <li>Card expirty : 11/25</li>
                <li>Card cvv : 001</li>
              </ul>

            </div>

          </div>
        )
      }
    </>

  )
}
