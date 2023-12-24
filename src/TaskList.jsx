// TaskList.jsx
import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ listToDo, setListToDo,  handleChange }) => {
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: Date.now(),
    text: "",
    check: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const data = {
        id: isEditing ? editId : Date.now() + 1,
        formData: { ...formData },
      };

      if (isEditing) {
        const updatedList = listToDo.map((item) =>
          item.id === editId ? { ...item, formData: { ...item.formData, check: !item.formData.check } } : item
        );

        setListToDo(updatedList);
        setIsEditing(false);
        setEditId(null);
      } else {
        setListToDo([...listToDo, data]);
      }

      setFormData({
        text: "",
        check: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = (id) => {
    try {
      const selectedItem = listToDo.find((item) => item.id === id);
  
      if (selectedItem) {
        setFormData({ ...selectedItem.formData, check: true });
        setIsEditing(true);
        setEditId(id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <form onSubmit={handleSubmit} className="my-4">
        <div className="mb-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            Text
          </label>
          <input
            type="text"
            name="text"
            id="text"
            value={formData.text}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Send
        </button>
      </form>
      {listToDo.map((item) => (
        <React.Fragment key={item.id}>
          <TaskItem key={item.id} handleCheck={handleCheck} item={item.formData} />
        </React.Fragment>
      ))}
    </>
  );
};

export default TaskList;
