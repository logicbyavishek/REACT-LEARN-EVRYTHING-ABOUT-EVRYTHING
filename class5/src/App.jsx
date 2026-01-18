import React from 'react'

const App = () => {
  const SubmitHandeler=(e)=>{
    e.preventDefault();
    console.log("Form Submitted");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        SubmitHandeler(e);
      }}>
        <input 
          type="text" 
          placeholder='Enter Name' 
          onChange={(e)=>{
            console.log(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App