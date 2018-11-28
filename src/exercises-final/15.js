// Where to NOT use hooks
import React from 'react'
// import {useState} from 'react'

// function NoHooksInCallbacks() {
//   let count = 0
//   return (
//     <button
//       onClick={() => {
//         // Wrong: don't use hooks in a callback
//         ;[count] = useState(count + 1)
//       }}
//     >
//       {count}
//     </button>
//   )
// }

// function NoConditionalHooks(props) {
//   let count = props.count
//   let setCount = props.setCount
//   if (typeof count === undefined && typeof setCount === undefined) {
//     // Wrong: Don't call hooks conditionally
//     ;[count, setCount] = useState(0)
//   }
//   return (
//     <button onClick={() => setCount(currentCount => currentCount + 1)}>
//       {count}
//     </button>
//   )
// }

// function NoHooksInLoops(props) {
//   const items = []
//   for (let i = 0; i < props.items.length; i++) {
//     // Wrong: Don't call hooks inside loops
//     const [count, setCount] = useState(i)
//     items.push(
//       <button
//         key={props[items][i].id}
//         onClick={() => setCount(currentCount => currentCount + 1)}
//       >
//         {count}
//       </button>,
//     )
//   }
//   return items
// }

// // Wrong: Don't call hooks outside a component's render phase
// const [count, setCount] = useState(0)
// function NoExternalHooks(params) {
//   return (
//     <button onClick={() => setCount(currentCount => currentCount + 1)}>
//       {count}
//     </button>
//   )
// }

// class NoClassHooks extends React.Component {
//   render() {
//     // Wrong: Don't call hooks inside class components
//     const [count, setCount] = useState(0)
//     return (
//       <button onClick={() => setCount(currentCount => currentCount + 1)}>
//         {count}
//       </button>
//     )
//   }
// }

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <div>When NOT to use hooks (see the code)</div>
}
Usage.title = 'Where to NOT use hooks'

export default Usage
