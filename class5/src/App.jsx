import React, { useState } from 'react'

const App = () => {
  const SubmitHandeler=(e)=>{
    e.preventDefault();
    console.log(name);
  }

  const [name, setname] = useState('');

  return (
    <div>
      <form onSubmit={(e)=>{
        SubmitHandeler(e);
      }}>
        <input 
          type="text" 
          placeholder='Enter Name' 
          value={name} 
          onChange={(e)=>setname(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App