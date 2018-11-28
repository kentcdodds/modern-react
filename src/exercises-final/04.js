// Counter: optimizations
import React, {useState, useEffect} from 'react'

function Counter() {
  const [count, setCount] = useState(() =>
    Number(window.localStorage.getItem('count') || 0),
  )
  const incrementCount = () => setCount(count + 1)
  useEffect(
    () => {
      window.localStorage.setItem('count', count)
    },
    [count],
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
