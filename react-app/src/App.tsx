import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi Charlie.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Press me to make a number big!    {count}
        </button>
        <p>
          <code>This is a deployment test, isn't it exciting.</code>
        </p>
      </div>
    </>
  )
}

export default App
