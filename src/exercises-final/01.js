// Counter: useState
import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount(currentCount => currentCount + 1)
  return <button onClick={incrementCount}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: useState'

export {Usage as default}
