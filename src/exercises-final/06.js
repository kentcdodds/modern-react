// VanillaTilt: Custom Hook
import React, {useRef, useLayoutEffect} from 'react'
import VanillaTilt from 'vanilla-tilt'

function useVanillaTilt(options) {
  const tiltNode = useRef()
  useLayoutEffect(() => {
    VanillaTilt.init(tiltNode.current, options)
    return () => tiltNode.current.vanillaTilt.destroy()
  }, [])
  return tiltNode
}

function Tilt(props) {
  const tiltNode = useVanillaTilt({
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5,
  })
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
Usage.title = 'VanillaTilt: Custom hook'

export default Usage
