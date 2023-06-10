import React from 'react'

import { useState } from 'react'

const UserInfo = () => {
    const [ firstName ] = useState(0)
    
    const [ lastName ] = useState(0)

    const [ Email_Add ] = useState(0)

    const [ Phone_Number ] = useState(0)

    return (
    <div>

        <h3>USER INFO</h3>
        <input type='text'>{firstName}</input>
        <input type='text'>{lastName}</input>
        <input type='text'>{Email_Add}</input>
        <input type='text'>{Phone_Number}</input>
      
    </div>
  )
}


export default UserInfo
