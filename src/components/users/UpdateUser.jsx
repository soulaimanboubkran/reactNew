import React, { useState, useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const UpdateUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate()
  useEffect(() => {
    try {
      console.log('ID:', id);
      console.log('Users:', users);
      const user = users.find((item) => item.id == id);
      if (user) {
        setUserData(user);
        console.log('Found user:', user);
      }
    } catch (error) {
      console.log('Error in useEffect:', error);
    }
  }, [id, users]);
  
  console.log(userData)
  
  const handleUpdateUser = () => {
    try {
      dispatch({ type: 'UPDATE_USER', payload: userData });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Update User</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"  className="flex-1 border border-gray-300 rounded-xl p-2 mx-2"value={userData?.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className="flex-1 border border-gray-300 rounded-xl p-2 mx-2" value={userData?.email} onChange={handleChange} />
      </div>
      <button className='rounded-xl border hover:text-white text-black hover:bg-black  py-2 px-4 ' onClick={handleUpdateUser}>Update User</button>
    </div>
  );
};

export default UpdateUser;
