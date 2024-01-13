// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';

import Personne from './components/app/Personne/Personne';
import FormulaireAddition from './components/FormulaireAddition/FormulaireAddition';
import Formulaire from './components/formulaire/Formulaire';

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
const rappel = () =>{
  
}
  return (
    <>
    <Personne/>
    <FormulaireAddition/>
    <Formulaire rappel={rappel}/>
      {/* <TaskList listToDo={listToDo} setListToDo={setListToDo} handleChange={handleChange} setFormData={setFormData} formData={formData} />*/}
    </>
  );
}

export default App;