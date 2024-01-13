import React, { useState } from 'react';

const FormulaireAddition = () => {
  const [formData, setFormData] = useState({
    nb1: '',
    nb2: '',
    total: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {

    const total = parseInt(formData.nb1) + parseInt(formData.nb2);
    setFormData((prev) => ({ ...prev, total }));
  };

  return (
    <div>
      <input type="number" onChange={handleChange} name="nb1" value={formData.nb1} />
      <input type="number" onChange={handleChange} name="nb2" value={formData.nb2} />
      <button onClick={handleClick}>Add</button>
      <h1>Total: {formData.total}</h1>
    </div>
  );
};

export default FormulaireAddition;
