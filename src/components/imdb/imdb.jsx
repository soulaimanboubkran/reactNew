import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

const Imdb = () => {
  const [s, setS] = useState("");
  const [type, setType] = useState("movie");
  const [y, setY] = useState(undefined);
  const [result, setResult] = useState([]);
  const [initialQuantities, setInitialQuantities] = useState({});
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const addToCart = (item, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { id: item.imdbID, title: item.Title, quantity }});
  };

  const addMore = (itemId) => {
    dispatch({ type: "addMore", payload: itemId });
  };
  const n9ss = (itemId) => {
    dispatch({ type: "-", payload: itemId });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const handleQuantityChange = (itemId, quantity) => {
    setInitialQuantities({...initialQuantities, [itemId]: quantity});
  };

  const handleClick = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=6e30c4b4&s=${s}&type=${type}&y=${y}`);
      const data = await response.json();
      setResult(data.Search);
    } catch (error) {
      console.error('Error fetching:', error);
    } 
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.title} 
            <button className='ml-5 mx-5' onClick={() =>n9ss(product.id)}> -</button>{product.quantity}
            <button className='ml-5' onClick={() => addMore(product.id)}> +</button>
            <button className='ml-5' onClick={() => removeFromCart(product.id)}> x</button>

          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        <input name='s' value={s} className="flex-1 border border-gray-300 rounded-xl p-2" placeholder="Search..." onChange={(e) => setS(e.target.value)} />
        <select defaultValue={type} onChange={(e) => setType(e.target.value)} className='border border-gray-300 rounded-xl p-2'>
          <option value='movie'>Movie</option>
          <option value='series'>Series</option>
        </select>
        <input name='y' value={y} className="w-32 border border-gray-300 rounded-xl p-2" placeholder="Year" type="number" onChange={(e) => setY(e.target.value)} />
        <button className='rounded-xl border hover:text-white text-black hover:bg-black  py-2 px-4 ' onClick={handleClick}>Search</button>
      </div>

      <div className="grid gap-4">
        {result && result.map((item) => (
          <div key={item.imdbID} className="flex gap-4">
            <img
              alt="Cover image"
              className="rounded-lg object-cover w-24 h-36"
              src={item.Poster}
              style={{
                aspectRatio: "100/150",
                objectFit: "cover",
              }}
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">{item.Title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.Type}, {item.Year}</p>
              <input 
                type="number" 
                value={initialQuantities[item.imdbID] || 1} 
                onChange={(e) => handleQuantityChange(item.imdbID, parseInt(e.target.value))} 
                min="1" 
                className="border border-gray-300 rounded-xl p-2 w-24" 
                placeholder="Quantity" 
              />
              <button onClick={() => addToCart(item, initialQuantities[item.imdbID] || 1)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imdb;
