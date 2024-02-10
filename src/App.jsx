// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';



import Personne from './components/Personne/Personne';
import FormulaireAddition from './components/FormulaireAddition/FormulaireAddition';
import Formulaire from './components/formulaire/Formulaire';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/tp16/Posts';
import Post from './components/tp16/Post';
import Imdb from './components/imdb/imdb';
import UserList from './components/users/UserList';
import AddUser from './components/users/AddUser';
import UpdateUser from './components/users/UpdateUser';

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
  <Route path='/update-user/:id' element={<UpdateUser/>}/>
<Route path='/add-user' element={<AddUser/>}/>
<Route path='/' element={<UserList/>}/>
      <Route path='/imdb' element={<Imdb/>}/>
    <Route path="/posts" element={<Posts />} />
    <Route path="/post/:id" element={<Post />} />
    </Routes>
   {/*  <Personne/>
    <FormulaireAddition/>
    <Formulaire rappel={rappel}/>
    */}
    
    </BrowserRouter>
      {/* <TaskList listToDo={listToDo} setListToDo={setListToDo} handleChange={handleChange} setFormData={setFormData} formData={formData} />*/}
    </>
  );
}

export default App;