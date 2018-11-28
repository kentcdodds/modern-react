// Counter: optimizations
import React, {useState, useEffect} from 'react'

function Counter() {
  // Right now, we're reading localStorage on every render
  // But we only really need to read that value for the first render
  // 🐨 1. instead of passing the value to useState as we are now,
  // pass a function which returns the value.
  const [count, setCount] = useState(
    Number(window.localStorage.getItem('count') || 0),
  )
  const incrementCount = () => setCount(count + 1)
  useEffect(
    () => {
      window.localStorage.setItem('count', count)
    },
    // 🐨 2. pass a second argument to useEffect right here
    // it should be an array of the callback's "dependencies"
    // Said differently: "What variables does the useEffect callback use?"
    // pass those variables as a second argument as an array.
    // React _only_ calls the effect callback:
    // 1. After the first render
    // 2. After a render during which any element in the dependencies array changes.
    //    (If there is no array provided, then it is called after every render.)
  )
  return <button onClick={incrementCount}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: optimizations'

export default Usage
