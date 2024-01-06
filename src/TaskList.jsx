import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem.jsx';

const TaskList = ({ listToDo, setListToDo, handleChange, formData, setFormData }) => {
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const cachedList = JSON.parse(localStorage.getItem('todoList'));
    if (cachedList) {
      setListToDo(cachedList);
    }
  }, [setListToDo]);

  // Save data to local storage whenever the listToDo state changes
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(listToDo));
  }, [listToDo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const data = {
        id: isEditing ? editId : Date.now() + 1,
        formData: { ...formData },
        check: isEditing ? !listToDo.find(item => item.id === editId).formData.check : false,
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
        id: Date.now(),
        text: '',
        check: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = (id) => {
    setEditId(id);
    setIsEditing(true);
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
        <TaskItem key={item.id} handleCheck={handleCheck} item={item.formData} />
      ))}
    </>
  );
};

export default TaskList;
