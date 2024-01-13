import React from 'react'

const Formulaire = ({rappel}) => {

  return (
    <div>
 <textarea  className="resize border rounded-md" id="user-input" placeholder="Enter your text here" />
      <button onClick={rappel}>send</button>
    </div>
  )
}

export default Formulaire
