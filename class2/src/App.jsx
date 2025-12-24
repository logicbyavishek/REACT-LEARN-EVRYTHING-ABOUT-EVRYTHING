import React, { useState } from 'react'

const App = () => {
  let a = 0
  const [first, setfirst] = useState(a)

  function buttonClick(){
    setfirst(a++)
  }

  return (
    <div>
      <h1>{first}</h1>
      <button onClick={buttonClick}>increase</button>
    </div>
  )
}

export default App