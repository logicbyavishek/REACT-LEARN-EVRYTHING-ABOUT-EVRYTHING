import React, { useState } from 'react'

const App = () => {

  const [alluser, setalluser] = useState(['avi']);

  const SubmitHandeler=(e)=>{
    e.preventDefault();
    setname('');

    const newuser = [...alluser];
    newuser.push(name);
    console.log(newuser);
    setalluser(newuser);
    
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
          required 
          value={name} 
          onChange={(e)=>setname(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {alluser.map(function(elem){
        return <h1>{elem}</h1>
      })}
    </div>
  )
}

export default App