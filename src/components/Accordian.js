import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'

export const Accordian = () => {

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className='flex flex-col my-4 text-lg justify-between'>
            <div className='flex text-lg py-4 justify-between'>
                <h2 className=''>Search</h2>
                <button onClick={handleClick}><IoIosArrowDown /></button>
            </div>
            {
                active && (
                    <div className='px-2'>
                        <input className='rounded p-1 border-2 border-custom-red outline-none' type="text" />
                    </div>
                )
            }

        </div>
    )
}
