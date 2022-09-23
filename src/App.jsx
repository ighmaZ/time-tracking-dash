import React from 'react'
import data from "./data.json"

const App = () => {


  return (
    <div className=' container flex flex-row  justify-center items-center h-screen  '>

<div className='h-72 w-40 bg-black  mr-8'>hi</div>      

<div className='grid grid-cols-3 gap-5'>

  
  { data.map(({title,current})=> { 
return(
<div className='h-36 w-40 two  flex flex-col  justify-center items-center '>

    <h4>{title}</h4>
    <h1>{current}hrs</h1>
    <h5>last week </h5>
</div>)
  })  }
   

  
</div>
    </div>
  )
}

export default App