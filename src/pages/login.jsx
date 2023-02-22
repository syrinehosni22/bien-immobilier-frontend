import axios from "axios";
import {useState} from "react";
import store from '../redux/store';
import {login} from "../redux/actions"
import { useNavigate } from 'react-router-dom';

export default function  LoginForm  () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {

   let  loginCredentials={
        email:username,
        password:password

    }
    // Here, you would typically validate the user's credentials and retrieve their role from a database or other source.
    // For simplicity, we'll just hard-code the user and role.
    axios.post("http://localhost:8088/api/subscription/login",loginCredentials).then(
        (response)=>
        {
            console.log(response.data.jwt,response.data.user.role.libelle);
            store.dispatch(login(response.data.jwt, response.data.user.role.libelle));
            navigate('/lesBiens');


        }

    )
   

    // Dispatch the login action to update the store
  };

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};