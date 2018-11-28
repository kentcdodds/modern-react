// VanillaTilt: useRef
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

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return (
    <div className="totally-centered">
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </div>
  )
}
Usage.title = 'VanillaTilt: useRef'

export default Usage
