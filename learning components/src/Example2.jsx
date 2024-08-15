import React, { useState } from 'react'

const Example2 = () => {
  const [banned,setBanned]=useState(false);
  return (
    <div className='px-4 py-4' >
      <h1 className='ml-3'>{banned.toString()}</h1>
      <button onClick={()=>setBanned(!banned)} className='bg-sky-500 text-white rounded-md px-2 py-2 mt-3'>Banned it</button>
    </div>
  )
}

export default App
