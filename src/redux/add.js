// cartReducer.js

const initialState = {
    products: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          products: [...state.products, action.payload],
         
        };
        
      case "REMOVE_FROM_CART":
        return {
          ...state,
          products: state.products.filter(item => item.id !== action.payload),
        };
      case "RESET_CART":
        return {
          ...state,
          products: [],
        };
      default:
        return state;
    
    }
  };
  
  export default cartReducer;
  