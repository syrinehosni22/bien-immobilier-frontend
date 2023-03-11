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
import Bien from "../../components/listDesBiens/bien/Bien";
import { saveNewBien } from "../../xhr/BienRequets";

export default function AddBien() {
  const [bien, setBien] = React.useState({});
  const [typeBiens, setTypeBiens] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [status, setStatus] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
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
      console.log("json", users);
      const responseT = await fetch(
        "http://localhost:8088/api/TypeImmobilier/findAll",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const jsonT = await responseT.json();
      setTypeBiens(jsonT);
      console.log("json", jsonT);

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
    const newBien = { ...bien, [e.target.name]: e.target.value };
    setBien(newBien);
  };
  const HandleChangeSelect = (e) => {
    console.log("event.target.name", e.target.name);
    const newBien = { ...bien, [e.target.name]: { id: e.target.value } };
    setBien(newBien);
  };
  const HandleSave = () => {
    const token = store.getState().token;

    let newBien = { ...bien, status: { id: 1 } };
    console.log("save", newBien);
    axios
      .post("http://localhost:8088/api/bienImmobilier/Add", newBien, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/lesBiens");
      });
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <h2>ajouter un bien</h2>

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
            label="Name"
            name="name"
            onChange={HandleChange}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            label="Nombre Piece"
            name="nombrePiece"
            onChange={HandleChange}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            variant="standard"
            label="Addresse"
            name="adresse"
            onChange={HandleChange}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            label="Prix"
            name="prix"
            onChange={HandleChange}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            variant="standard"
            label="Description"
            multiline
            rows={4}
            name="description"
            onChange={HandleChange}
          />
        </div>
        <div className="select-button">
          <InputLabel
            id="standard-basic"
            variant="standard"
            label="utilisateur"
            multiline
            rows={4}
            name="user"
          >
            Utilisateur
          </InputLabel>
          <Select
            labelId="user"
            id="user"
            value={users[0]}
            label="utilisateur"
            onChange={HandleChangeSelect}
            name="user"
          >
            {users.map((u) => {
              return <MenuItem value={u.id}>{u.firstName}</MenuItem>;
            })}
          </Select>
        </div>
        <div className="select-button">
          <InputLabel
            id="standard-basic"
            variant="standard"
            label="type immmobilier"
            name="typeImmobilier"
          >
            Type Immobilier
          </InputLabel>
          <Select
            id="typeImmobilier"
            value={typeBiens[0]}
            name="typeImmobilier"
            label="type Immobilier"
            onChange={HandleChangeSelect}
          >
            {typeBiens.map((t) => {
              return <MenuItem value={t.id}>{t.libelle}</MenuItem>;
            })}
          </Select>
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
            value={typeBiens[0]}
            name="status"
            label="status"
            onChange={HandleChangeSelect}
          >
            {status.map((t) => {
              return <MenuItem value={t.id}>{t.description}</MenuItem>;
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
