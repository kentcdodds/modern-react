// VanillaTilt: useRef
// 🐨 1. you'll want useRef, and useLayoutEffect
// you can use `useLayoutEffect` the same way you use `useEffect`.
// Make sure to ask me what the difference is!
// https://reactjs.org/docs/hooks-reference.html#useref
// https://reactjs.org/docs/hooks-reference.html#uselayouteffect
import React from 'react'
// 🐨 2. you'll need this:
// import VanillaTilt from 'vanilla-tilt'

function Tilt(props) {
  // 🐨 3. create a `tiltNode` variable here with `useRef()`
  // 🐨 5. create a `useLayoutEffect` callback here which
  //    uses the `VanillaTilt.init` with `tiltNode.current`
  // 🐨 6: you'll need this in your callback:
  // const vanillaTiltOptions = {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // }
  // 🐨 7. return a cleanup function which will call
  //   `tiltNode.current.vanillaTilt.destroy()`

  // By default, effects run after every render. This is normally what
  // you want, but if you want you can optimize things by ensuring they
  // are only called when you specifically want to.
  // 💯 add a second argument to your `useLayoutEffect` which lists an empty
  // array. We can do this because we only want it to run on initial render
  // and we know that the `tiltRef.current` will never change.

  // 🐨 4. pass the `tiltNode` variable to this `div` as the `ref` prop:
  return (
    <div className="tilt-root">
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
