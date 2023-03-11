import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { store } from "../../redux/store";
import { useNavigate } from "react-router-dom";
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import React, { useEffect } from "react";
import Header from "../../components/header/header";

export default function Reclamation() {
  const [reclamation, setReclamation] = React.useState([]);
  const [User, setUser] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  const HandleChange = (e) => {
    const newReclamation = { ...User, [e.target.name]: e.target.value };
    setReclamation(newReclamation);
  };

  const HandleSave = () => {
    const token = store.getState().token;

    let setReclamation = { ...reclamation, role: { id: 3 } };
    console.log("save", setReclamation);
    axios
      .post("http://localhost:8088/api/reservation/Add/", setReclamation, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/clients");
      });
  };

  return (
    <>
      <Header />
      <h2>ajouter une reclamtion</h2>

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
            label="montant"
            name="montant"
            onChange={HandleChange}
          />
        </div>
        <div>
          {/* <MuiPickersUtilsProvider
            id="standard-basic"
            variant="standard"
            label="Email"
            name="email"
            onChange={HandleChange}
          />
          <MuiPickersUtilsProvider
            id="standard-basic"
            variant="standard"
            label="date fin"
            name="date_fin"
            onChange={HandleChange}
          /> */}
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
