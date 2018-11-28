// Counter: custom hooks
import React, {useState} from 'react'

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount)
  const incrementCount = () => setCount(currentCount => currentCount + 1)
  return {count, incrementCount}
}

function Counter() {
  const {count, incrementCount} = useCounter(0)
  return <button onClick={incrementCount}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: custom hooks'

export {useCounter}
export default Usage
