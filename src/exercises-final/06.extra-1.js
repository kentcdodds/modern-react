// VanillaTilt: support node change
import React, {useState, useCallback} from 'react'
import VanillaTilt from 'vanilla-tilt'

function useVanillaTilt(options) {
  const refCallback = useCallback(tiltNode => {
    if (tiltNode) {
      VanillaTilt.init(tiltNode, options)
    }
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
Usage.title = 'VanillaTilt: Support node change'

export {Usage as default}
