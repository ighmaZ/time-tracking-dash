import React, { useState } from 'react'
import data from "./data.json"
//completed
const App = () => {

  const [timeFrame, setTimeframe] = useState("weeky");

  return (
    <div className='container-1 flex flex-row  justify-center items-center h-screen  '>

<div className='h-72 w-40 bg-black mr-8'>
  <div className=' flex flex-col  justify-center items-center mt-20'>

        <button onClick={() => setTimeframe("daily")}>Daily</button>
        <button onClick={() => setTimeframe("weekly")}>Weekly</button>
        <button onClick={() => setTimeframe("monthly")}>Monthly</button>

  </div>
  
  </div>      

<div className='grid grid-cols-3 gap-5'>

  
  { data.map((datas)=> { 
return(
<div className='h-36 w-40 two  flex flex-col  justify-center items-center '>

    <h4>{datas.title}</h4>
    
    <h1>{datas.timeframes.current} hrs</h1>
    <h5>{datas.timeframes.weekly.previous} last week </h5>
</div>)
  })  }
   

  
</div>
    </div>
  )
}

export default App