import React, { useState } from 'react'

const Formulaire = ({rappel}) => {
const [mess,setMess] = useState('')

  return (
    <div>
 <textarea onChange={(e)=>setMess(e.target.value)}  className="resize border rounded-md" id="user-input" placeholder="Enter your text here" />
      <button onClick={()=>rappel(mess)}>send</button>
    </div>
  )
}

export default Formulaire
