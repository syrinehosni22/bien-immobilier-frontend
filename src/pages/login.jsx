import axios from "axios";
import { useState } from "react";
import store from "../redux/store";
import { login } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    let loginCredentials = {
      email: username,
      password: password,
    };
    // Here, you would typically validate the user's credentials and retrieve their role from a database or other source.
    // For simplicity, we'll just hard-code the user and role.
    axios
      .post("http://localhost:8088/api/subscription/login", loginCredentials)
      .then((response) => {
        console.log(response.data.jwt, response.data.user.role.libelle);
        store.dispatch(
          login(response.data.jwt, response.data.user.role.libelle)
        );
        navigate("/lesBiens");
      });

    // Dispatch the login action to update the store
  };

  return (
    <Box
      className="login-form"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        variant="outlined"
        className="primary-color"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
}
