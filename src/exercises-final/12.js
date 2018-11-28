// VanillaTilt: React.lazy
import React, {Suspense, useState} from 'react'

const Tilt = React.lazy(() => import('../tilt'))

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
        <Suspense fallback="loading...">
          {showTilt ? (
            <div className="totally-centered">
              <Tilt>
                <div className="totally-centered">vanilla-tilt.js</div>
              </Tilt>
            </div>
          ) : null}
        </Suspense>
      </div>
    </div>
  )
}
Usage.title = 'VanillaTilt: React.lazy'

export default Usage
