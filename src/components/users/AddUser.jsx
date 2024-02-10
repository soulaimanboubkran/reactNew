import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {useNavigate } from 'react-router-dom';
const AddUser = () => {
const [formdata,setFormData] = useState([]);


const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData((prev) => ({...prev,[name] : value,}));
  };

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const addToCart = () => {
    try {
      dispatch({ type: 'AddUser', payload: { id: Date.now(), ...formdata } });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
     <input name='name' onChange={handleChange} className="flex-1 border border-gray-300 rounded-xl p-2 mx-2" placeholder="Add a name "  />
     <input name='email' onChange={handleChange} className="flex-1 border border-gray-300 rounded-xl p-2 mx-2" placeholder="Add an email "  />
     <button className='rounded-xl border hover:text-white text-black hover:bg-black  py-2 px-4 ' onClick={()=>addToCart()}>Add that user</button>
    </div>
  )
}

export default AddUser
