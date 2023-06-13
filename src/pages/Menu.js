import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import Navbar from '../components/Navbar'
import { IoIosArrowDown } from 'react-icons/io'
import { price, search } from '../utils/FilterApis'
import { BiSliderAlt } from 'react-icons/bi'
import '../app.css'

export const Menu = () => {

  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product)
  const [productLimit, setProductLimit] = useState(10);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [status, setStatus] = useState('')

  useEffect(() => {
    setStatus("Loading...");
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    if (Array.isArray(products)) {
      const slicedProducts = products.slice(0, productLimit);
      setDisplayedProducts(slicedProducts);
    }
  }, [products,productLimit]);


  const handleShowMore = () => {
    setProductLimit(productLimit + 10);
  };



  const productPrices = ["1000", "10000"]
  const productCategories = ["Pizzas", "Desserts", "Veg", "Non Veg"]

  // fiter 
  const [active, setActive] = useState({
    price: true,
    search: true,
    category: false
  });

  const handleClick = (type) => {


    setActive((prevState) => ({
      ...prevState,
      price: true,
    }))

    if (type === 'price') {
      setActive((prevState) => ({
        ...prevState,
        price: !active.price,
      }))
    }
    else if (type === 'search') {
      setActive((prevState) => ({
        ...prevState,
        search: !active.search,
      }))
    }
    else if (type === 'category') {
      setActive((prevState) => ({
        ...prevState,
        category: !active.category,
      }))
    }
  };


  // handling price filter

  const handleAllProducts = () => {
    setDisplayedProducts(products)
  }

  const handlePrice = (lp, up) => {
    const filteredData = price(products, Number(lp), Number(up));
    if (filteredData === null) {
      setStatus('No Products found')
      setDisplayedProducts([])
    }
    else {
      setDisplayedProducts(filteredData)
    }
  }

  // handling search filter
  const handleSearch = (event) => {
    const filteredData = search(products, event.target.value);
    if (filteredData === null) {
      setStatus("No results found :(")
      setDisplayedProducts([])
    }
    else {
      setDisplayedProducts(filteredData)
    }
  }

  const [activeFilter, setActiveFilter] = useState(false);
  const handleShowFilter = () => {
    setActiveFilter(!activeFilter)
  }

  return (
    <>

      <Navbar />
      <button className='mt-4 text-2xl ml-8 lg:hidden' onClick={handleShowFilter}><BiSliderAlt /></button>
      <div className="flex  my-8">
        {/* filtering */}
        <div className={`h-screen absolute  w-full bg-white ${activeFilter ? 'block' : 'hidden'} px-8 lg:block w-fit`}>

          <h1 className='text-center mb-4 text-custom-red '>Filteration</h1>
          <hr />
          {/* filter by price */}
          <div className=' mb-4 rounded p-4'>
            <div className='flex text-lg justify-between'>
              <h2 className='py-4'>Price</h2>
              <button onClick={() => handleClick("price")} value="price"><IoIosArrowDown /></button>
            </div>
            {
              active.price && (
                <div className='flex flex-col gap-1'>

                  <label className='block flex gap-2'>
                    <input
                      type="radio"
                      name="price"
                      // checked={selectedOption === "option1"}
                      onChange={handleAllProducts}
                    />
                    All Products
                  </label>

                  <label className='block flex gap-2'>
                    <input
                      type="radio"
                      name="price"
                      // checked={selectedOption === "option1"}
                      onChange={() => handlePrice(0, 100)}
                    />
                    Less than 100
                  </label>

                  {
                    productPrices.map((price) => {
                      return (<label className='block flex gap-2'>
                        <input
                          type="radio"
                          name="price"
                          onChange={() => handlePrice(price / 10, Number(price))}
                        // checked={selectedOption === "option1"}
                        // onChange={handleOptionChange}
                        />
                        {price / 10} - {price}
                      </label>
                      )
                    })
                  }

                  <label className='block flex gap-2'>
                    <input
                      type="radio"
                      value="10000"
                      name="price"
                      // checked={selectedOption === "option1"}
                      onChange={() => handlePrice(10000, 1000000)}
                    />
                    More than 10000
                  </label>

                </div>

              )
            }
          </div>
          <hr />
          {/* filter by search */}
          <div className='flex flex-col my-4 text-lg justify-between'>
            <div className='flex text-lg py-4 justify-between'>
              <h2 className=''>Search</h2>
              <button onClick={() => handleClick("search")} ><IoIosArrowDown /></button>
            </div>
            {
              active.search && (
                <div className='px-2'>
                  <input onChange={handleSearch} className='rounded p-1 border-2 border-custom-red outline-none' type="text" />
                </div>
              )
            }
          </div>
          <hr />
          {/* filter by categories  */}
          <div className='my-4'>
            <div className='flex text-lg justify-between'>
              <h2 className='py-2'>Categories</h2>
              <button onClick={() => handleClick("category")} ><IoIosArrowDown /></button>
            </div>
            {
              active.category && (
                <div className='px-2'>
                  {
                    productCategories.map((category) => {
                      return (
                        <label className='block flex gap-2'>
                          <input
                            className='accent-custom-red'
                            type="checkbox"
                          // checked={isChecked}
                          // onChange={handleCheckboxChange}
                          />
                          {category}
                        </label>
                      )
                    })
                  }
                </div>
              )
            }

          </div>

        </div>

        {/* displaying products */}

        <div className='max-w-6xl  mx-auto h-screen grid justify-center gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
          {displayedProducts.length > 0 ? (
            displayedProducts.map(product => (
              <Card key={product._id} product={product} />
            ))
          ) : (
            <p className='text-lg text-center mt-12'>{status}</p>
          )}
          <div className=''>
            {products.length > productLimit && (
              <button onClick={handleShowMore} className='w-36 shadow-md mt-4 text-custom-red px-4 py-2 rounded-full hover:shadow-lg'>Show More</button>
            )}
          </div>
        </div>

      </div>

    </>
  );
};
