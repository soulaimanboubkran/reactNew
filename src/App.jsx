// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';

import Personne from './components/Personne/Personne';
import FormulaireAddition from './components/FormulaireAddition/FormulaireAddition';
import Formulaire from './components/formulaire/Formulaire';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/tp16/Posts';
import Post from './components/tp16/Post';

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
const rappel = (mess) =>{
  return alert(mess)
}

  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route path="/posts" element={<Posts />} />
    <Route path="/post/:id" element={<Post />} />
    </Routes>
    <Personne/>
    <FormulaireAddition/>
    <Formulaire rappel={rappel}/>
    
    
    </BrowserRouter>
      {/* <TaskList listToDo={listToDo} setListToDo={setListToDo} handleChange={handleChange} setFormData={setFormData} formData={formData} />*/}
    </>
  );
}

export default App;