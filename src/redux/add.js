import { createSlice } from '@reduxjs/toolkit';


const initialState = {
products: [],

 };


const cartReducer = createSlice({
    name:"cart",
initialState,
reducers:{
    ADD_TO_CARTx : (state, action) => {
        const existingProductIndex = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (existingProductIndex !== -1) {
          state.products[existingProductIndex].quantity += action.payload.quantity;
        } else {
          state.products.push(action.payload);
        }
      },
    

}


})

export const {ADD_TO_CART} = cartReducer.actions;
  
  export default cartReducer.reducer;



















































   const initialState = {

   products: [],

   total:0

 };



 const cartReducer = (state = initialState, action) => {

     switch (action.type) {

       case "ADD_TO_CART":

           const existingProductIndex = state.products.findIndex(

               (product) => product.id === action.payload.id

           );



           if (existingProductIndex !== -1) {



               return {

                   ...state,

                   products: state.products.map((product, index) => {

                         if (index === existingProductIndex) {

                           return {

                               ...product,

                               quantity: product.quantity + action.payload.quantity,

                           };

                       }

                       return product;

                   }),

               };

           } else {



               return {

                   ...state,                                                     

                 products: [...state.products, { ...action.payload }],

               };

           }

           case "addMore":

             const existingProduct = state.products.findIndex(

                 (product) => product.id === action.payload

             );

             if (existingProduct !== -1) {

                 return {

                     ...state,

                     products: state.products.map((product, index) => {

                           if (index === existingProduct) {

                             return {

                                 ...product,

                                 quantity: product.quantity + 1,

                             };

                         }

                         return product;

                     }),

                 };

             } else {

                 return {

                     ...state,

                     products: [...state.products, { ...action.payload, quantity: 1 }],

                 };

             }



             case "-":

                 const existing = state.products.findIndex(

                     (product) => product.id === action.payload

                 );

                 if (existing !== -1) {

                     return {

                         ...state,

                         products: state.products.map((product, index) => {

                               if (index === existing) {

                                 return {

                                     ...product,

                                     quantity: product.quantity -1,

                                 };

                             }

                             return product;

                         }),

                     };

                 } else {

                     return {

                         ...state,

                         products: [...state.products, { ...action.payload, quantity: 1 }],

                     };

                 }



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


