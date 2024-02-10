import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
const UserList = () => {
    const users = useSelector((state) => state.user.users);
  return (
    <>
 
<Link to='/add-user'className='rounded-xl flex justify-start border hover:text-white text-black hover:bg-black w-1/6  mb-4 py-2 px-4 ' >Add a user</Link> 


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">


    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                    Nome
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
           
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map((item)=>(

           
            <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
               
                <td className="px-6 py-4">
                    {item.id}
                </td>
                <td className="px-6 py-4">
                    {item.name}
                </td>
                <td className="px-6 py-4">
                   {item.email}
                </td>
                <td className="px-6 py-4">
                    <Link to={`/update-user/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit </Link>
                    <a href="#" className="font-medium text-red-900 hover:underline">delete </a>
                </td>
            </tr>
             ))

            }
        </tbody>
    </table>
</div>
</>
  )
}

export default UserList
