import { getItem } from '../utils/StorageApi'
import { useDispatch, useSelector } from 'react-redux';
import { updateItem, removeItem } from '../utils/StorageApi'
import { useEffect, useState } from 'react';
import { addAll, remove, updateQnt } from '../store/cartSlice';
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../components/Navbar';
import { BsCart4 } from 'react-icons/bs'
import {add} from '../store/paymentSlice'
import { useNavigate } from 'react-router-dom';

const serverUrl = 'https://foodbar-admin.onrender.com'

const Cart = () => {
  // fetching cart data from the redux store
  let products;
  let cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    products = getItem();
    dispatch(addAll(products));
    setTotalPrice(getTotalPrice())
  }, [])




  const delItem = (_id, price, qnt) => {
    removeItem(_id);
    setTotalPrice(updatePrice('del', price, qnt))
    // remove from redux store
    dispatch(remove(_id));

  }

  function updateItemQnt(event, quantity, _id, price) {
    const action = event.target.getAttribute('data-action');
    if (action === 'decrement') {
      setTotalPrice(updatePrice('dec', price, quantity))
      quantity = quantity > 1 ? quantity - 1 : quantity
      // updating quantify of both redux store and localstorage
      dispatch(updateQnt({ _id, quantity }))
      updateItem(_id, quantity)

    } else if (action === 'increment') {
      quantity++
      dispatch(updateQnt({ _id, quantity }))
      updateItem(_id, quantity)
      setTotalPrice(updatePrice('inc', price, quantity))
    }
  }

  function getTotalPrice() {
    let totalPrice = 0;
    products.forEach(product => {
      totalPrice += product.price * product.qnt;
    });
    return totalPrice;
  }

  const updatePrice = (action,price, qnt) => {
    price = Number(price);
    let newPrice = totalPrice;
    if (action === 'inc') {
      newPrice = totalPrice + price;
    }
    else if (action === 'dec' && qnt > 1) {
      newPrice = totalPrice - price;
    }
    else if (action == 'del') {
      newPrice = totalPrice - price * qnt;
    }
    return newPrice;
  }

  const [deliveryDetails, setDeliveryDetails] = useState({})

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setDeliveryDetails(values => ({ ...values, [name]: [value] }))
  }

  // handling order

  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const handleOrder = () => {
    if (isAuthenticated) {
      const number = deliveryDetails.phone[0]
      const address = deliveryDetails.address[0]
      const price = totalPrice.toString()
      if (!(Object.keys(deliveryDetails).length === 0) &&  Boolean(number) && Boolean(address)) {
        dispatch(add({number,address,price}))
        navigate('/payment', { state: {fromCart : true} })

      } else {
        window.alert('please fill up details')
      }
    }
    else {
      window.alert('please sign in')
    }
  }

  return (
    <>
      <Navbar />
      <div className=' min-h-screen p-4'>
        {
          cartData.length > 0 ? cartData.map(({ _id, price, qnt, title, image }) => (
            (
              <div key={_id}>
                <div className='bg-primary  flex flex-col items-center justify-evenly gap-y-2 p-2 rounded max-w-6xl mx-auto md:flex-row' key={_id}>
                  <img className='w-[100px] h-[100px]' src={`${serverUrl}/${image}`} alt={title} />
                  <h2 className='max-w-[200px] text-center'>{title}</h2>
                  {/* <h5 className='my-1 bg-gray-100 text-gray-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded w-fit'>140g</h5> */}
                  <h5 className='bg-gray-100 text-gray-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded w-fit'>₹ {price}</h5>
                  <div onClick={(e) => updateItemQnt(e, qnt, _id, price)}>
                    <button data-action='decrement' className=' bg-red-500 hover:bg-red-700 text-white font-bold px-3 rounded text-xl'>-</button>
                    <span className='mx-2'>{qnt}</span>
                    <button data-action='increment' className='bg-red-500 hover:bg-red-700 text-white font-bold text-xl px-2 rounded'>+</button><br />
                  </div>
                  <button onClick={() => delItem(_id, price, qnt)} className='bg-custom-red rounded text-lg text-white px-2 hover:bg-red-700'>Remove</button>
                </div>
                <hr className='max-w-6xl mx-auto' />
              </div>
            )
          )) :
            <div className='flex text-5xl text-light justify-center items-center gap-4'>
              <h2>Empty</h2>
              <div><BsCart4 /></div>
            </div>
        }

        <div className={` ${(cartData.length > 0) ? 'block' : 'h_idden'} max-w-6xl mt-8 mx-auto flex flex-col gap-2  p-1`}>
          <p className='text-lg w-fit font-bold text-gray-900'><span>Total : {Math.round(totalPrice)} &#8377;</span></p>
          <input className='max-w-xl p-2 rounded outline-custom-red border border-custom-red' type="text" name="phone" placeholder='Phone Number' onChange={handleChange} />
          <input className='max-w-xl p-2 rounded outline-custom-red border border-custom-red' type="text" name="address" placeholder='Address' onChange={handleChange} />
          <button className='w-fit h-10 p-4 rounded-full flex items-center text-white bg-custom-red shadow-md hover:bg-red-600' onClick={handleOrder}>Place Order</button>
        </div>

      </div>
    </>
  )
}

export default Cart