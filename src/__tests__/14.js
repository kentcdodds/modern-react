import React from 'react'
import {render, fireEvent, wait} from 'react-testing-library'
import mockFetchPokemon from '../fetch-pokemon'
import Usage from '../exercises-final/14'
// import Usage from '../exercises/14'

jest.mock('../fetch-pokemon', () =>
  jest.fn(name => Promise.resolve({mokePokemon: true, name})),
)

test('fetches pokemon data when form is submitted', async () => {
  const {getByLabelText, getByText} = render(<Usage />)
  const name = getByLabelText(/name/i)
  name.value = 'Charzard'
  fireEvent.click(getByText(/submit/i))
  expect(mockFetchPokemon).toHaveBeenCalledTimes(1)

  mockFetchPokemon.mockClear()

  await wait(() => getByText(/Charzard/))
  name.value = 'Pikachu'
  fireEvent.click(getByText(/submit/i))
  expect(mockFetchPokemon).toHaveBeenCalledTimes(1)
  await wait(() => getByText(/Pikachu/))

  mockFetchPokemon.mockClear()

  // TODO: the error case leads to an infinite loop in react
  // mockFetchPokemon.mockRejectedValue({error: 'fake failure'})
  // name.value = 'fail'
  // fireEvent.click(getByText(/submit/i))
  // expect(mockFetchPokemon).toHaveBeenCalledTimes(1)
  // await wait(() => getByText(/error/i))
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=modern%20react&e=14&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
