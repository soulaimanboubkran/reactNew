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
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({ id: null, name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) return;

    if (contact.id) {
      setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
    } else {
      contact.id = contacts.length + 1;
      setContacts([...contacts, contact]);
    }

    setContact({ id: null, name: '', email: '' });
  };

  const handleEdit = (contact) => {
    setContact(contact);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };


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
   



    <div className="App">
      <h1>Simple Contact Manager</h1>
      <form onSubmit={handleSubmit}>
        <h2>{contact.id ? 'Edit Contact' : 'Add Contact'}</h2>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <button type="submit">{contact.id ? 'Update' : 'Add'}</button>
      </form>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available. Please add some contacts.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>
                <strong>Name:</strong> {contact.name}
              </p>
              <p>
                <strong>Email:</strong> {contact.email}
              </p>
              <button onClick={() => handleEdit(contact)}>Edit</button>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>


    </BrowserRouter>
      {/* <TaskList listToDo={listToDo} setListToDo={setListToDo} handleChange={handleChange} setFormData={setFormData} formData={formData} />*/}
    </>
  );
}

export default App;