import React from 'react';

const View = ({ item }) => {
  return (
    <div className="p-4 rounded-md bg-gray-100 mt-4">
      <h2 className="text-xl font-bold mb-2">Details</h2>
      <div>
        <strong>ID:</strong> {item.id}
      </div>
      <div>
        <strong>Nom:</strong> {item.nom}
      </div>
      <div>
        <strong>Ville:</strong> {item.ville}
      </div>
  
    </div>
  );
};

export default View;