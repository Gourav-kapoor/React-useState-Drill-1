import React, { useState } from 'react'

const App = () => {
  const [val,setVal]= useState({name: "Raptor", isBanned:false})
  return (
    <div className='px-4 py-4'>
      <h1>name : {val.name}</h1>
      <h2>banned: {val.isBanned.toString()}</h2>
      <button onClick={()=>setVal({...val, isBanned:!val.isBanned})} className='bg-sky-500 text-white rounded-md px-2 py-2 mt-3'>Change it</button>
    </div>
  )
}

export default App
