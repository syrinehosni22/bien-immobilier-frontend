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

export default function Reservation() {
  const [reservation, setReservation] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [biens, setBiens] = React.useState([]);

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
      console.log("json", users);
      const responseT = await fetch(
        "http://localhost:8088/api/bienImmobilier/findAll",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const jsonT = await responseT.json();
      setBiens(jsonT);
      console.log("json", jsonT);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  const HandleChange = (e) => {
    const newReservation = { ...reservation, [e.target.name]: e.target.value };
    setReservation(newReservation);
  };
  const HandleChangeSelect = (e) => {
    console.log("event.target.name", e.target.name);
    const newReservation = {
      ...reservation,
      [e.target.name]: { id: e.target.value },
    };
    setReservation(newReservation);
  };
  const HandleSave = () => {
    const token = store.getState().token;
    console.log("reservation", reservation);
    axios
      .post("http://localhost:8088/api/reservation/Add/", reservation, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("reservation adeed succesfully", response.data);
        navigate("/lesReservations");
      });
  };

  return (
    <>
      <Header />
      <h2>Réserver un bien</h2>

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
          <TextField
            id="standard-basic"
            variant="standard"
            label="date début"
            name="date_debut"
            onChange={HandleChange}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            label="date fin"
            name="date_fin"
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
            Bien Immobilier
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
            labelId="bien"
            id="bien"
            value={users[0]}
            label="Bien immobilier"
            onChange={HandleChangeSelect}
            name="bienImmobilier"
          >
            {biens.map((b) => {
              return <MenuItem value={b.id}>{b.name}</MenuItem>;
            })}
          </Select>
        </div>

        <div>
          <Button variant="contained" onClick={HandleSave}>
            Réserver
          </Button>
        </div>
      </Box>
    </>
  );
}
