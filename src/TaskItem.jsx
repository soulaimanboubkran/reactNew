import React from 'react'

const TaskItem = ({item,handleCheck}) => {
    
  return (
    <div>
       <div  key={item.id} className="my-4 p-4 border rounded-md shadow-md">
          
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{item.text}</h2>
            <h4>{item.check === true ?"valide":"not valide"}</h4>
            <div className="flex items-center mb-4">
         <button onClick={()=>handleCheck(item.id)} >done</button>

        </div>
        </div>
    </div>
  )
}

export default TaskItem
