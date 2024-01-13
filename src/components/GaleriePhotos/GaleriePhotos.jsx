import React, { useState, useEffect } from 'react';

const GaleriePhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
    
   
        const response = await fetch(`https://api.unsplash.com/photos`);
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h2>Random Photos from Unsplash</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {photos.map((photo) => (
         {photo}
        ))}
      </div>
    </div>
  );
};

export default GaleriePhotos;
