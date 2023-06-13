// import smallpizza from '../assets/images/smallpizza.png'
import { BsBasket2Fill } from 'react-icons/bs'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, updateQnt } from '../store/cartSlice'
import { getItem, setItem } from '../utils/StorageApi';
import { updateItem } from '../utils/StorageApi';

const serverUrl = 'https://foodbar-admin.onrender.com'

export const Card = ({ product }) => {
    const dispatch = useDispatch();
    const products = getItem();


    const [qnt, setQnt] = useState(1)
    const [hovered, setHovered] = useState(false);
    // click effect on qnuantify button
    const [qntBtn, setQntBtn] = useState({ inc: false, dec: false })
    const [addCart, setAddCart] = useState(false);

    const handleMouseOver = () => {
        setHovered(true)
    }

    const handleMouseOut = () => {
        setHovered(false);
    }

    // increasing and decreasing product quantity

    const incQnt = (id) => {
        // For button animation
        setQntBtn({ inc: true })
        setTimeout(() => {
            setQntBtn({ inc: false })
        }, 100);
        setQnt(qnt + 1)

        // updating quantity to the cart redux store
        if (addCart) {
            let quantity = qnt + 1;
            dispatch(updateQnt({ id, quantity }))
            updateItem(id, quantity)
        }
    }

    const decQnt = (id) => {
        setQntBtn({ dec: true })
        setTimeout(() => {
            setQntBtn({ dec: false })
        }, 100);

        if (qnt > 1) {
            setQnt(qnt - 1)
            let quantity = qnt - 1;

            if (addCart) {
                dispatch(updateQnt({ id, quantity }))
                updateItem(id, quantity)
            }
        }
    }

    // add data to the cart redux store
    const addToCart = (product) => {
        console.log(product)
        if (addCart) {
            window.alert('already added you can change quantity')
        }
        else {
            let flag = true;
            products.forEach(item => {
                if (item._id === product._id) {
                    alert('product had already been added into your cart plase check your cart')
                    flag = false
                }
            });
            if (flag) {
                setAddCart(true)
                dispatch(add({ ...product, qnt }));
                // storing cart data in localStorage as well giving single product to the localstorage
                setItem({ ...product, qnt });
            }
        }
    }



    return (
        // we will chage the login add to cart when we get data from api
        <div key = {product.id} className={`py-4 flex flex-col gap-y-1 justify-center  items-center w-72 max-h-[350px] rounded-xl shadow-md transition ${hovered && 'bg-[#eb5030] text-white shadow-2xl'} md:w-68`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className='w-32 '>
                <img src={`${serverUrl}/${product.image}`} alt={product.name} width="200px" />
            </div>
            <h2 className={`text-2xl mt-2 font-semibold  ${hovered ? 'text-white' : 'text-[#393737]'}`}>{product.name}</h2>
            <p className=''><span> 140g</span></p>
            <p className={`text-xl mt-2 font-bold  ${hovered ? 'text-white' : 'text-[#393737]'} `}><span>${product.price}</span></p>
            <div className='flex mt-2 p-2 items-center gap-x-2 '>
                <div className='flex items-center'>
                    <button className={`text-2xl border border-r-0 px-4 rounded-tl-md  rounded-bl-md transition ${qntBtn.dec && 'bg-white '}`} onClick={() => decQnt(product.id)}>-</button>
                    <span className='text-xl border px-4 py-0.5'>{qnt}</span>
                    <button className={`text-2xl rounded-tr-md rounded-br-md border border-l-0 px-4 transition ${qntBtn.inc && 'bg-white '}`} onClick={() => incQnt(product.id)}>+</button>
                </div>
                <div>
                    <button onClick={() => addToCart(product)} className={`p-2 rounded  ${addCart && 'bg-white shadow text-custom-red'}`}><BsBasket2Fill size={20} /></button>
                </div>
            </div>
        </div>

    )
}
