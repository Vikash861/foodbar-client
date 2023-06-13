import smantha from '../assets/images/smantha.jpg'

const TestimonialCard = ({image,message,name,country}) => {



  return (
    <div className="flex justify-center">
            <div className='flex flex-col max-w-6xl  justify-center items-center gap-y-8 p-8 mt-8 shadow rounded-3xl md:flex-row gap-x-8 '>
              <div>
                <img src={smantha} alt="pic" className='rounded-full w-32 md:mr-28' />
              </div>
              <div className='text-left '>
                <p>{message}</p>
                <h2 className='mt-4 mb-1 text-lg font-bold text-[#eb5030]'>{name}</h2>
                <p className='text-sm'>{country}</p>
              </div>
            </div>
    </div>
  )
}

export default TestimonialCard