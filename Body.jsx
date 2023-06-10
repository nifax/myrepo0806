import React from 'react'

import { useState } from 'react'

const Body = () => {
    const [ count, setCount ] = useState(0)
  
    return (
    <div>

        <h3>CHANGING STATE</h3>
        <h1> {count}</h1>
       <button onClick ={ ()=>
          {setCount(count+1)}}> INCREASE</button>

          <button onClick ={ ()=>
            {setCount(count-1)}}> DECREASE</button>
    </div>
  )
}

export default Body
