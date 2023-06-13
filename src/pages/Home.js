import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import pizza from '../assets/images/pizza.png'
import delivery_bike from '../assets/images/delivery_bike.png'
import delivery_man from '../assets/images/delivery_man.png'
import checklist from '../assets/images/checklist.png'
import { Card } from '../components/Card'
import { Footer } from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import Carousel from '../components/Carousel'
import { useState } from 'react'



const Home = () => {
  // what we serve section
  // data of logos and headings
  const dataS = [
    { pic: checklist, text: 'Easy To Order' },
    { pic: delivery_bike, text: 'Fastest Delivery' },
    { pic: delivery_man, text: 'Best Quality' },
  ]

  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product)
  const [productLimit, setProductLimit] = useState(8);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])


  
  const handleShowMore = () => {
    setProductLimit(productLimit + 8);
  };
  
  
  let displayedProducts = [];
  
  if (Array.isArray(products)) {
    displayedProducts = products.slice(0, productLimit);
  }






  return (
    <>
      <Navbar />

      <div className='md:flex'>

        <div className='mb-8 p-4 md:w-3/6 order-last p-16'>
          <img src={pizza} alt="pizza" />
        </div>

        <div className='text-center flex flex-col gap-y-4 md:w-3/6 justify-center items-center gap-y-8 '>
          <h2 className='italic'>Are you hungry?</h2>
          <h1 className='text-3xl font-semibold md:text-4xl'>Don't Wait !</h1>
          <a className="w-32 h-10 m-auto bg-custom-red text-white border font-medium rounded-full focus:outline-none focus:ring focus:ring-red-500 mb-16 md:m-0" href='#menu'><h1 className='mt-1'>Order Now</h1></a>
        </div>

      </div>

      {/* what we serve section */}
      <div className='text-center flex flex-col gap-y-8 bg-secondary py-20'>
        <h2 className='text-custom-red mt-12'>What we Serve</h2>
        <div>
          <h1 className='text-3xl font-bold text-medium  tracking-wide mb-2'>Your Favorite Food</h1>
          <h1 className='text-3xl font-black text-medium tracking-wide'>Delivery Partner</h1>
        </div>

        <div className='p-0 md:p-4 lg:flex p-4 justify-center'>
          {
            dataS.map((data, i) => {
              let dropShadow = '';
              if (i === 1) dropShadow = 'drop-shadow-2xl';
              return (
                <div key={data._id} className={`bg-primary m-8 rounded-lg flex flex-col gap-y-4 p-5 ${dropShadow}`}>
                  <div className='w-48 h-48 mx-auto'>
                    <img src={data.pic} alt={data.text} />
                  </div>
                  <h2 className='text-xl font-bold text-grayish'>{data.text}</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              )
            })
          }
        </div>
      </div>

      {/*menu */}
      <div id='menu' className='text-center flex flex-col gap-y-4 py-16'>
        <h2 className='text-custom-red mt-12'>Our Menu</h2>
        <div>
          <h1 className='text-xl font-bold text-medium  tracking-wide mb-2 md:text-3xl'>Menu That Always Make You</h1>
          <h1 className='text-xl font-black text-medium tracking-wide md:text-3xl'>To Fall In Love</h1>
        </div>
        {/* cards */}
        <div className=' mx-auto p-8'>
          <div className='grid justify-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

            {displayedProducts.length > 0 ? (
              displayedProducts.map(product => (
                <Card key = {product._id} product={product} />
              ))
            ) : (
              <p>Loading...</p>
            )}


          </div>

          {products.length > productLimit && (
            <button onClick={handleShowMore} className='w-36 shadow-md mt-4 text-custom-red px-4 py-2 rounded-full hover:shadow-lg'>Show More</button>
          )}

        </div>

        {/* testimonials */}
        <div className='mt-8 max-w-6xl mx-auto p-8'>
          <h1 className='text-2xl text-[#0b0a0b] font-bold'>Testimonials About Us</h1>
          <span className='w-10 mx-auto my-2 h-2 rounded-full bg-custom-red block'></span>
          <p className='mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit recusandae commodi ipsum molestiae rem deserunt veniam enim sapiente. </p>
        </div>
        {/* carousel */}
          <Carousel />

      </div>
      {/* footer */}
      <Footer />
    </>
  )
}

export default Home
