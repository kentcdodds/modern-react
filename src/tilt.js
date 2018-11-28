import React, {useRef, useLayoutEffect} from 'react'
import VanillaTilt from 'vanilla-tilt'

function Tilt(props) {
  const tiltNode = useRef()
  useLayoutEffect(() => {
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    }
    VanillaTilt.init(tiltNode.current, vanillaTiltOptions)
    return () => tiltNode.current.vanillaTilt.destroy()
  }, [])
  return (
    <div ref={tiltNode} className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  )
}

export default Tilt
