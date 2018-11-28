// VanillaTilt: Support cleanup (and node change)
import React, {useState, useRef, useCallback} from 'react'
import VanillaTilt from 'vanilla-tilt'

function useRefEffect(fn, inputs = [fn]) {
  const destroy = useRef(null)
  return useCallback(inst => {
    if (typeof destroy.current === 'function') {
      destroy.current()
    }
    if (inst !== null) {
      destroy.current = fn(inst)
    } else {
      destroy.current = null
    }
  }, inputs)
}

function useVanillaTilt(options) {
  const refCallback = useRefEffect(tiltNode => {
    VanillaTilt.init(tiltNode, options)
    return () => tiltNode.vanillaTilt.destroy()
  }, [])
  return refCallback
}

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue)
  const toggle = () => setState(val => !val)
  return [state, toggle]
}

function Tilt(props) {
  const [showTilt, toggleShowTilt] = useToggle(true)
  const tiltNode = useVanillaTilt({
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5,
  })
  return (
    <div>
      <label htmlFor="show-tilt">Show Tilt</label>
      <input id="show-tilt" type="checkbox" onClick={toggleShowTilt} />
      {showTilt ? (
        <div ref={tiltNode} className="tilt-root">
          <div className="tilt-child">{props.children}</div>
        </div>
      ) : null}
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
Usage.title = 'VanillaTilt: Support cleanup (and node change)'

export default Usage
