import { useState } from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { NavLink, Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const [openNav, setOpenNav] = useState(false)

  const handleClick = () => {
    setOpenNav(!openNav);
  }


  return (
    <nav className="font-[sans] ">
      <div className='flex justify-between items-center p-4'>
        <div className='logo'>
          <Link to="/" className='text-custom-red font-Lobster text-2xl font-bold'>FOODBAR</Link>
        </div>

        <div className='hidden lg:block'>
          <div className='flex gap-x-8 text-lg'>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/Menu" activeClassName="active">Menu</NavLink>
            <NavLink to="/About" activeClassName="active">About</NavLink>
            <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
          </div>
        </div>

        <div className='flex gap-x-4 items-center'>
          <div className=' px-2 cursor-pointer'>
            <NavLink to='/cart' activeClassName="active" className='text-2xl'>
              <RiShoppingBasketFill />
            </NavLink>
          </div>

          <div className=''>
            <button onClick={handleClick} className='text-2xl mt-2 lg:hidden'>
              {
                openNav ? (<GrClose />) : (<GiHamburgerMenu />)
              }
            </button>
            {
              isAuthenticated ? (<Link to='/myaccount' className='bg-custom-red text-white px-4 py-2 rounded-3xl hidden   lg:block'>My Account</Link>) : (<button onClick={() => { loginWithRedirect() }} className='bg-custom-red text-white px-4 py-2 rounded-3xl hidden focus:outline-none  lg:block'>Sign In</button>)
            }
          </div>

        </div>

      </div>
      {
        openNav && (
          <div className='p-4 flex flex-col gap-y-2 lg:hidden'>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/Menu" activeClassName="active">Menu</NavLink>
            <NavLink to="/About" activeClassName="active">About</NavLink>
            <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
            <div>
              {
                isAuthenticated ? (<Link to='/myaccount' className='bg-custom-red text-white px-4 py-2 rounded-3xl'> My Account</Link>) : (<button onClick={() => loginWithRedirect()} className='bg-custom-red text-white px-4 py-2 rounded-3xl'>Sign In</button>)
              }
            </div>
          </div>
        )
      }

    </nav>
  )
}

export default Navbar;
