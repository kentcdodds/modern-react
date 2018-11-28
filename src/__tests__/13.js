import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Usage from '../exercises-final/13'
// import Usage from '../exercises/13'

test('renders upper case first and last name', async () => {
  const {getByLabelText, getByText} = render(<Usage />)
  fireEvent.change(getByLabelText(/first/i), {target: {value: 'first'}})
  getByText(/FIRST/)
  fireEvent.change(getByLabelText(/last/i), {target: {value: 'last'}})
  getByText(/LAST/)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=modern%20react&e=13&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
