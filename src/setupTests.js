import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'

beforeAll(() => {
  jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect)
})

afterAll(() => React.useEffect.mockRestore())
