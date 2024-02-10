
const initialState = {
  products: [],
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
