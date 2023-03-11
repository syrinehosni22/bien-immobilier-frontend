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
  const [reclamation, setReclamation] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);
  const [status, setStatus] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = store.getState().token;

    async function fetchData() {
      const response = await fetch("http://localhost:8088/api/user/find", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setUsers(json);
      console.log("users", users);

      const responseS = await fetch(
        "http://localhost:8088/api/status/findAll",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const jsonS = await responseS.json();
      setStatus(jsonS);
      console.log("json", jsonS);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const HandleChange = (e) => {
    const newReclamation = { ...reclamation, [e.target.name]: e.target.value };
    setReclamation(newReclamation);
    console.log("set", reclamation);
  };

  const HandleSave = () => {
    const token = store.getState().token;

    console.log("save", reclamation);
    axios
      .post("http://localhost:8088/api/reclamation/Add/", reclamation, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/reclamations");
      });
  };
  const HandleChangeSelect = (e) => {
    const newReclamation = {
      ...reclamation,
      [e.target.name]: { id: e.target.value },
    };
    setReclamation(newReclamation);
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
            label="description"
            name="description"
            onChange={HandleChange}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            label="type"
            name="type"
            onChange={HandleChange}
          />
        </div>
        <div className="select-button">
          <InputLabel
            id="standard-basic"
            variant="standard"
            label="status"
            name="status"
          >
            Status
          </InputLabel>
          <Select
            id="typeImmobilier"
            value={status[0]}
            name="status"
            label="status"
            onChange={HandleChangeSelect}
          >
            {status.map((t) => {
              return <MenuItem value={t.id}>{t.description}</MenuItem>;
            })}
          </Select>
          <InputLabel
            id="standard-basic"
            variant="standard"
            label="user"
            name="user"
          >
            Users
          </InputLabel>
          <Select
            id="user"
            value={users[0]}
            name="user"
            label="user"
            onChange={HandleChangeSelect}
          >
            {users.map((t) => {
              return <MenuItem value={t.id}>{t.firstName}</MenuItem>;
            })}
          </Select>
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
