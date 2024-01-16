import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Posts = () => {
    const [res,setRes] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
              const response = await fetch(`https://jsonplaceholder.org/posts`);
              const data = await response.json();
              setRes(data);
              console.log(res);
            } catch (error) {
              console.error('Error fetching:', error);
            }
          };

        fetchPosts();
      }, []);
  return (
    <div className="container mx-auto p-8">
    {res.map((postData)=>(
       
      <div key={postData.id}>
      {postData.id}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{postData.title}</h1>
        <Link to={`/post/${postData.id}`}>
        <img src={postData.thumbnail} alt="Post Image" className="w-full mb-4" /></Link>
        
     </div> ))}
  </div>
  )
}

export default Posts
