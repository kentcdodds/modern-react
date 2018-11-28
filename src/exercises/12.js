// VanillaTilt: React.lazy
// 🐨 3. add "Suspense" as an import from react here
import React, {useState} from 'react'
// 🐨 1. remove this import
import Tilt from '../tilt'

// 🐨 2. Use React.lazy with a dynamic import of ../tilt and assign that
// to a variable called Tilt

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  const [showTilt, setShowTilt] = useState()
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={showTilt}
          onChange={e => setShowTilt(e.target.checked)}
        />
        {' show tilt'}
      </label>
      <div>
        {/* 🐨 4. Add a Suspense element here with a fallback="loading..." prop */}
        {showTilt ? (
          <div className="totally-centered">
            <Tilt>
              <div className="totally-centered">vanilla-tilt.js</div>
            </Tilt>
          </div>
        ) : null}
        {/* close Suspense... then checkout the network tab when you check the box! */}
      </div>
    </div>
  )
}
Usage.title = 'VanillaTilt: React.lazy'

export default Usage
