// React.memo
import React, {useState} from 'react'

const Upper = React.memo(function Upper({children}) {
  const [count, setCount] = useState(0)
  return (
    <div>
      Uppercase version: {children.toUpperCase()}{' '}
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        {count}
      </button>
    </div>
  )
})

function App() {
  const [first, setFirstName] = useState('')
  const [last, setLastName] = useState('')
  return (
    <div>
      <label htmlFor="first-name-input">First Name</label>
      <input
        id="first-name-input"
        onChange={e => setFirstName(e.target.value)}
      />
      <Upper>{first}</Upper>
      <hr />
      <label htmlFor="last-name-input">Last Name</label>
      <input id="last-name-input" onChange={e => setLastName(e.target.value)} />
      <Upper>{last}</Upper>
    </div>
  )
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <App />
}
Usage.title = 'React.memo'

export {Usage as default}
