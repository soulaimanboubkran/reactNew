// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import TaskList from './TaskList';
import { Kg } from './components/app/app';

function App() {
  {/* const [listToDo, setListToDo] = useState([]);

  const [formData, setFormData] = useState({
    id: Date.now(),
    text: "",
    check: false,
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({...prev,[name]: type === "checkbox" ? checked : value,}));
  };
*/}

  return (
    <>
    <Kg/>
      {/* <TaskList listToDo={listToDo} setListToDo={setListToDo} handleChange={handleChange} setFormData={setFormData} formData={formData} />*/}
    </>
  );
}

export default App;