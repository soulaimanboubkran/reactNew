import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableData from './table'

function App() {
  const [res,setRes] =useState([])
  const [formData, setFormData] = useState({
      id:Date.now(),
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
         
  try {
    const data={
      id:Date.now()+1,
      formData:{...formData},
  }
   setRes([...res,data])
   setFormData({
    id:Date.now()+1,
      nom:'',
      ville: '',
  })
  } catch (error) {
    console.log(error)
  }
  
  }


  const handleDelete = (id) => {
  try {
    const updatedRes = res.filter((item) => item.id !== id);
    setRes(updatedRes);
  } catch (error) {
    console.log(error)
  }
    
  };
 
  return (
    <>
        <div className="p-4 rounded-md bg-gray-100">
      <form onSubmit={handleSubmit} className="mb-4 flex flex-wrap items-center"> 
        <label htmlFor="nom" className="mr-2">Nom:</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2"
        />

        <label htmlFor="ville" className="mr-2">Ville:</label>
        <input
          type="text"
          id="ville"
          name="ville"
          value={formData.ville}
          onChange={handleChange}
          className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2" 
        />

        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md mx-2 md:mx-4"> {/* Responsive margin */}
          Create
        </button>
      </form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
 <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
      <tr className="bg-gray-200">
        <th className="py-2 px-4 border-b">ID</th>
        <th className="py-2 px-4 border-b">Nom</th>
        <th className="py-2 px-4 border-b">Ville</th>
        <th className="py-2 px-4 border-b"></th>
      </tr>
    </thead>
      
        {res.map((item) => (
          <TableData item={item.formData} key={item.id}
          handleUpdate={() => handleUpdate(item.id)}
          handleDelete={() => handleDelete(item.id)}
          handleView={() => handleView(item.id)}
            />
        ))}
      </table>
      </div>
    </div>
    
    </>
  )
}

export default App
