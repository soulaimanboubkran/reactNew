const initialState = {
    users: []
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "AddUser":
        return {
          users: [...state.users, { ...action.payload }]
        };
  
      case "UPDATE_USER":
        const { id, name, email } = action.payload;
        return {
          users: state.users.map(user => {
            if (user.id === id) {
              return { ...user, name, email };
            }
            return user;
          })
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  