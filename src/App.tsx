import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi Charlie.</h1>
      <div className="card">
        <p>
          <code>This is a deployment test, isn't it exciting.</code>
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Press me to make a number big!    {count}
        </button> <br /> <br />
        <code>This really is a great website.</code> <br />
        <code>Also when are we watching Cobra Kai. I think we said yesterday but it looks like we forgot.</code>
      </div>
    </>
  )
}

export default App
