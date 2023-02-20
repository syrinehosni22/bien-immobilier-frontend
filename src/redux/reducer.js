import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    token: null,
    role: null,
  };
  
  export  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          token: action.token,
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
  const persistConfig = {
    key: 'root',
    storage,
  }
  
  export const persistedReducer = persistReducer(persistConfig, userReducer)
  
