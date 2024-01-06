import React from 'react';

const TaskItem = ({ item, handleCheck }) => {
  if (!item || !item.formData) {
    return null;
  }

  return (
    <div>
      <div className="my-4 p-4 border rounded-md shadow-md">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{item.formData.text} -- {item.id}</h2>
        <h4>{item.formData.check === true ? "valide" : "not valide"}</h4>
        <div className="flex items-center mb-4">
          <button type="submit" onClick={() => handleCheck(item.id)}>done</button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
