import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableData from './table'

function App() {
  const [res,setRes] =useState([])
  const [formData, setFormData] = useState({
      
      nom:'',
      ville: '',
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
  
  const handleSubmit=(e)=>{
      
          e.preventDefault()
         
  
  const data={
      id:res.length+1,
      formData:{...formData},
  }
  setRes([...res,data])
   setFormData({
      nom:'',
      ville: '',
  })
  }
  
 
  return (
    <>
       <div>
      <form onSubmit={handleSubmit}>
        <input type="text"name='nom' value={formData.nom} onChange={handleChange}/>
        <input type="text"name='ville'value={formData.ville} onChange={handleChange}/>
        <button type='submit'>create</button>
      </form>
      <ul>
        {res.map((item) => (
         <TableData  item={item.formData}/>
         
        ))}
      </ul>
    </div>
    
    </>
  )
}

export default App
