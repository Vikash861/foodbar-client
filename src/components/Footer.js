import { MdSend } from 'react-icons/md'
import { Link } from 'react-router-dom';


export const Footer = () => {
    return (
        <footer>
            <div className='flex flex-col gap-y-8 p-8 md:flex-row gap-4-8'>
                <div className='flex flex-col gap-y-4 md:w-4/12 lg:p-12'>
                    <h1 className='text-custom-red font-Lobster text-2xl font-bold'>FOODBAR</h1>
                    <p className='text-[#676767]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='lg:p-12 w-3/12'>
                    <h2 className='font-semibold text-[#3e3e3e]'>Company</h2>
                    <ul className='text-[#676767] mt-2 flex flex-col gap-y-1'>
                        <li><Link to="/about">About Us</Link></li>
                        <li>Blog</li>
                        <li><Link to="/menu">All Products</Link></li>
                        <li>Location Map</li>
                    </ul>
                </div>
                <div className='lg:p-12 w-3/12'>
                    <h2 className='font-semibold text-[#3e3e3e]'>Services</h2>
                    <ul className='text-[#676767] mt-2  flex flex-col gap-y-1   '>
                        <li>Order tracking</li>
                        <li>Wish List</li>
                        <li><Link to='/myaccount'>My Account</Link></li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div className='lg:p-12'>
                    <h2 className='font-semibold text-[#3e3e3e]'>Get In Touch</h2>
                    <p className='text-[#676767] my-2'>Subscribe to our weekly Newsletter and recieve updates via email</p>
                    <form className='flex gap-x-4 py-2'>
                        <input type="email" placeholder="Enter your Email Address" className='p-3 outline-red-400 border-2 border-textbox-border rounded-3xl' />
                        <button type='submit' className='bg-custom-red px-5 py-0.5 rounded-full hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300'><MdSend color='white' /></button>
                    </form>
                </div>
            </div>
            <hr className='w-11/12 mx-auto' />
            <div className='flex flex-col text-[#676767] w-11/12 mx-auto my-6 text-center md:flex-row  justify-between'>
                <div>
                    <p>All Right Reserved @ Company 2022</p>
                </div>
                <div>
                    <ul className='flex gap-x-4 justify-center'>
                        <li> Terms and Condition</li>
                        <li>Privacy & Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
