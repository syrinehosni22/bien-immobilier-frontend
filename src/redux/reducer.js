const initialState = {
    user: null,
    role: null,
  };
  
  export  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          token: action.user,
          role: action.role,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          role: null,
        };
      default:
        return state;
    }
  };