import React from 'react'

const TableData = ({item, handleUpdate,handleDelete }) => {

  return (
   
    <tbody>
      <tr key={item.id} className="hover:bg-gray-100">
        <td className="py-2 px-4 border-b">{item.id}</td>
        <td className="py-2 px-4 border-b">{item.nom}</td>
        <td className="py-2 px-4 border-b">{item.ville}</td>
        <td class="px-6 py-4 text-center ">
                    <a  className="font-medium mx-1 text-blue-600 dark:text-blue-500 cursor-pointer " onClick={()=>handleUpdate(item)} >Edit</a>
                    <a className="font-medium mx-1 text-blue-600 dark:text-blue-500 cursor-pointer" onClick={() => handleDelete(item.id)}>delete</a>
                    <a className="font-medium text-blue-600 dark:text-blue-500 cursor-pointer">view</a>
                </td>
      </tr>
    </tbody>
  
  )
}

export default TableData
