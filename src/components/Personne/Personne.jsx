import React, { useState } from 'react'

const Personne = () => {
    let [age,setAge] =useState(0);
    const handleAge = ()=>{

        
         if(age < 50){
        setAge(age = age+ 1)
       

        }
    }
  return (
    <div>
        <button onClick={handleAge}>+Age</button>
      <h1>{age}</h1>
    </div>
  )
}

export default Personne
