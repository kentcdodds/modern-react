// Stopwatch: useEffect cleanup
import React from 'react'

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}

function Stopwatch() {
  // 🐨 1. make lapse and running come from a call to `useState`
  const lapse = 0
  const running = false
  // 🐨 create a timerRef to keep track of the intervalId you get back from setInterval

  // If the stopwatch is unmounted when the interval is running
  // then we could have a memory leak problem. Let's clean that up.
  // 🐨 add a `useEffect` here which does nothing, but returns a cleanup
  // function which will run on unmount. It should call `clearInterval`
  // with the timerRef.current (the intervalId you get back from setInterval).

  function handleRunClick() {
    if (running) {
      // 🐨 call clearInterval with the intervalId you get back from setInterval
    } else {
      // 🐨 create a startTime variable that should be Date.now() - lapse
      // 🐨 call setInterval (this will return an intervalId which you should
      // assign to timerRef.current).
      // 🐨 In your interval callback, update the
      // lapse state to Date.now() - startTime
    }
    // 🐨 toggle the running state
    // 💰 setRunning(!running)
  }

  function handleClearClick() {
    // 🐨 clear the interval with the intervalId you get back from setInterval
    // 🐨 set lapse to 0
    // 🐨 set running to false
  }

  return (
    <div style={{textAlign: 'center'}}>
      <label
        style={{
          fontSize: '5em',
          display: 'block',
        }}
      >
        {lapse}
        ms
      </label>
      <button onClick={handleRunClick} style={buttonStyles}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleClearClick} style={buttonStyles}>
        Clear
      </button>
    </div>
  )
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Stopwatch />
}
Usage.title = 'Stopwatch: useEffect cleanup'

export default Usage
