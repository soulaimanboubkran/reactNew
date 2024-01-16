import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const [res, setRes] = useState(null); // Initialize as null

  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.org/posts/${id}`);
        const data = await response.json();
        setRes(data);
        console.log(res);
      } catch (error) {
        console.error('Error fetching:', error);
      }
    };

    fetchPost();
  }, [id]); 
  if (!res) {
   
    return null;
  }

  return (
    <div className="container mx-auto p-8">
      <div key={res.id}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{res.title}</h1>
        <img src={res.thumbnail} alt="Post Image" className="w-full mb-4" />
        <p className="text-gray-700">{res.content}</p>
        <p className="text-gray-700">Status: {res.status}</p>
        <p className="text-gray-700">Category: {res.category}</p>
        <div className="text-gray-500 mt-4">Published At: {res.publishedAt}</div>
        <div className="text-gray-500">Updated At: {res.updatedAt}</div>
      </div>
    </div>
  );
};

export default Post;
