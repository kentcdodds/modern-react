import React from 'react'
import chalk from 'chalk'
import {render, fireEvent} from 'react-testing-library'
import Usage from '../exercises-final/10'
// import Usage from '../exercises/10'

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

test('renders', async () => {
  jest.spyOn(console, 'error')
  const {container, getAllByText, getByTestId} = render(<Usage />)
  const diff = getByTestId('diff')
  const timer1 = {
    startStop: getAllByText('Start')[0],
    clear: getAllByText('Clear')[0],
    label: container.querySelectorAll('label')[0],
  }
  const timer2 = {
    startStop: getAllByText('Start')[1],
    clear: getAllByText('Clear')[1],
    label: container.querySelectorAll('label')[1],
  }

  fireEvent.click(timer1.startStop)

  await sleep(200)

  expect(parseInt(diff.textContent, 10)).toBeGreaterThan(150)

  fireEvent.click(timer2.startStop)

  await sleep(200)
  try {
    expect(parseInt(timer2.label.textContent, 10)).toBeGreaterThan(150)
    expect(parseInt(diff.textContent, 10)).toBeLessThan(300)
  } catch (error) {
    error.message = [
      chalk.red(
        `🚨  The stopwatch time is not being incremented or we can't find it. Make sure the time lapsed is in a <label> and ensure that state is set properly. 🚨`,
      ),
      error.message,
    ].join('\n')
    throw error
  }
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=modern%20react&e=10&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
