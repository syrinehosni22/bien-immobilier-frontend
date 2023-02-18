import { Types } from './actionTypes';

 // Define the actions
 export const login = (token, role) => ({
    type: 'LOGIN',
    token,
    role,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });