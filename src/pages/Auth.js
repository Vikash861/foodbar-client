import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { useState } from 'react'
import food from '../assets/images/food.jpg'

const Auth = () => {

  // ui 
  const [login, setLogin] = useState(true);

  const signUp = () => {
    setLogin(false)
  }

  const logIn = () => {
    setLogin(true)
  }

  // api 

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
  }








  return (

    <div className=" h-screen border bg-food_doodle bg-contain bg-no-repeat font-sans lg:bg-none flex items-center">
      <div className='hidden w-6/12 h-screen lg:block'>
        <img src={food} alt='food image' className='h-full w-full object-cover' />
      </div>
      <div className='flex px-6 flex-col w-full gap-y-4 lg:w-6/12'>
        <div className='mt-16 mb-4 text-center text-3xl lg:hidden'><h1>FOODBAR</h1></div>
        {/*small to medium ui */}
        <h2 className='font-medium text-center text-xl mb-2 lg:hidden text-left'>{login ? "Login to Your Account" : "Create Your Account"}</h2>
        {/* {large ui} */}
        <h2 className=' hidden font-medium text-xl mb-8 lg:block mb-0 text-left text-3xl font-bold mb-2'>{login ? "Login" : "Singup"}</h2>
        {/* button placements for large screens */}
        <div className='gap-x-4 w-full hidden lg:flex'>
          <button className='social-login lg:rounded'><FcGoogle size={25} />Continue with Google</button>
          <button className='social-login lg:rounded'><FaFacebook size={25} />Continue with Facebook</button>
        </div>
        <h2 className='my-0 text-center hidden lg:block'>Or Use Your Email</h2>
        <form action="" onSubmit={handleSubmit}>
          <label for="email"  className='text-medium hidden md:block'>Email Address</label>
          <input className='input-box lg:rounded' type="email" id="email" placeholder="johndoe@gmail.com" />
          <label for="password"  className='text-medium hidden md:block'>Password</label>
          <input className='input-box lg:rounded' type="password" id="password" placeholder="" />
          <div className='flex justify-between'>
            <div>
              <input className='accent-custom-red' type="checkbox" id="keepMe" />
              <label for="keepMe" className='ml-2 font-serif tracking-tighter'>Keep me logged In</label>
            </div>
            <a href="#" className='font-xs underline font-serif tracking-tighter'>Forgot Password?</a>
          </div>
          <button className='block w-full text-primary py-3 font-sans bg-custom-red rounded mt-8 lg:mb-12' type="submit">{login ? 'Login' : 'Create Account'}</button>
        </form>
        <h2 className='my-4 text-center lg:hidden'>OR</h2>
        {/* button placements small to medium devices */}
        <div className='flex gap-x-4 mb-4 w-full lg:hidden'>
          <button className='social-login'><FcGoogle size={25} /> Google</button>
          <button className='social-login'><FaFacebook size={25} /> Facebook</button>
        </div>
        <div className={`font-serif tracking-tight text-center  ${login ? 'block' : 'hidden'} lg:text-left`}>Don't Have An Account <span onClick={signUp} className='underline decoration-solid bold'>Singup</span></div>
        <div className={`font-serif tracking-tight text-center  ${login ? 'hidden' : 'block'}  lg:text-left`}>Already Have An Account <span onClick={logIn} className='underline decoration-solid bold'>Login</span></div>
      </div>
    </div>


  )
}

export default Auth;
