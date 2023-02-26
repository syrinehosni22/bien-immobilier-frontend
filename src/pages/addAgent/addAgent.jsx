import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { store } from "../../redux/store";
import { useNavigate } from "react-router-dom";

import React, { useEffect } from "react";
import Header from "../../components/header/header";

export default function AddAgent() {
  const [Role, setRole] = React.useState({});
  const [User, setUser] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  const HandleChange = (e) => {
    const newUser = { ...User, [e.target.name]: e.target.value };
    setUser(newUser);
  };
  const HandleSave = () => {
    const token = store.getState().token;

    let newUser = { ...User, role: { id: 2 } };
    console.log("save", newUser);
    axios
      .post("http://localhost:8088/api/user/add/" + "2", newUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/agents");
      });
  };

  return (
    <>
      <Header />
      <h2>ajouter un Agent</h2>

      <Box
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
            variant="standard"
            label="Nom"
            name="first_name"
            onChange={HandleChange}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            label="Prénom"
            name="last_name"
            onChange={HandleChange}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            variant="standard"
            label="Email"
            name="email"
            onChange={HandleChange}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            label="Password"
            type="password"
            name="password"
            onChange={HandleChange}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            variant="standard"
            label="CIN"
            name="cin"
            onChange={HandleChange}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            label="phone_number"
            name="télephone"
            onChange={HandleChange}
          />
        </div>
        <div>
          <Button variant="contained" onClick={HandleSave}>
            Ajouter
          </Button>
        </div>
      </Box>
    </>
  );
}
