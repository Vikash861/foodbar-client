import { useState, useEffect } from 'react';


const Cta = ({ data, appereance }) => {

  const [ripple, setRipple] = useState(false);
  const [coords, setCoords] = useState({ x: -1, y: -1 })

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setRipple(true);
      setTimeout(() => setRipple(false), 500)
    }
  }, [coords])

  useEffect(() => {
    if (!ripple) setCoords({ x: -1, y: -1 });
  }, [ripple])

  const handleClick = (e) => {
    console.log(e.clientY - e.target.offsetTop)
    console.log(e.clientX - e.target.offsetLeft)
    setCoords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop
    })
  }

  return (
    <button className={appereance} onClick={handleClick}>{data}
      {ripple ? <span className='absolute bg-white red w-8 h-8 rounded-full -translate-x-2/4 -translate-y-2/4 animate-ripple ' style={{left:coords.x, top:coords.y}}></span> : ""}
    </button>
  )
}

export default Cta;