import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      // Please Vanta effect settings.
      // https://www.vantajs.com/
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x107787,
        points: 10.00,
        maxDistance: 29.00,
        spacing: 15.00,
        showDots: false
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className='fixed top-0 left-0 w-full h-full' ref={myRef}></div>
}
export default Vanta;