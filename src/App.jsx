import React,{ useState } from 'react';

import './App.css';
import TableData from './table';
import View from './view';

function App() {
  const [res, setRes] = useState([]);
  const [formData, setFormData] = useState({
    id: Date.now(),
    nom: '',
    ville: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [view,setView] =useState(false)
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = {
        //e
        id: isEditing ? editId : Date.now() + 1,

        formData: { ...formData },
      };

      if (isEditing) {

        const updatedRes = res.map((item) =>
          item.id === editId ? data : item
        );

        setRes(updatedRes);
        setIsEditing(false);
        setEditId(null);

      } else {
        setRes([...res, data]);
      }

      setFormData({
        id: Date.now() + 1,
        nom: '',
        ville: '',
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    //find item
    const selectedItem = res.find((item) => item.id === id);
    //setformdata for updating data...
    setFormData(selectedItem.formData);

    console.log(formData)

    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    try {
      const updatedRes = res.filter((item) => item.id !== id);
      setRes(updatedRes);
    } catch (error) {
      console.log(error);
    }
  };
  const handleView = (id) => {
    const clickedItem = res.find((item) => item.id === id);
    setSelectedItem(clickedItem);
    setView(!view);
  };
  const filteredItems = res.filter(
    (item) =>
      item.formData.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.formData.ville.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="p-4 rounded-md bg-gray-100">
      <div className='flex flex-col md:flex-row items-center'>

<form onSubmit={handleSubmit} className="mb-4 md:flex md:flex-wrap items-center">
  <label htmlFor="nom" className="mr-2">
    Nom:
  </label>
  <input
    type="text"
    id="nom"
    name="nom"
    value={formData.nom}
    onChange={handleChange}
    className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2"
  />

  <label htmlFor="ville" className="mr-2">
    Ville:
  </label>
  <input
    type="text"
    id="ville"
    name="ville"
    value={formData.ville}
    onChange={handleChange}
    className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2"
  />

  <button type="submit" className="bg-blue-600 text-white p-2 rounded-md mx-2 md:mx-4">
    {isEditing ? 'Update' : 'Create'}
  </button>
</form>

<input
  type="text"
  placeholder="Search by Nom or Ville"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="p-2  border rounded-md mb-4 md:mb-4 md:mr-2"
/>

</div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nom</th>
                <th className="py-2 px-4 border-b" >Ville</th>
                <th className="py-2 px-4 border-b"></th>
              </tr>
            </thead>
            {filteredItems.map((item) => (
              <React.Fragment key={item.id}>
                <TableData
                  item={item.formData}
                  key={item.id}
                  handleUpdate={() => handleUpdate(item.id)}
                  handleDelete={() => handleDelete(item.id)}
                  handleView={() => handleView(item.id)}
                />
              </React.Fragment>
            ))}
            
          </table>
        </div>
        {view && selectedItem && <View key={selectedItem.id} item={selectedItem.formData} />}
      </div>
    </>
  );
}

export default App;
