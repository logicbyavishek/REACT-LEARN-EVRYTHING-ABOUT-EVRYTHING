import React, { useState } from 'react'

const App = () => {
  let a = 0
  const [first, setfirst] = useState(a)

  

  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=>{
        setfirst(first + 1)
      }}>increase</button>
      <button onClick={()=>{
        setfirst(first -1)
      }}>decrease</button>
    </div>
  )
}

export default App