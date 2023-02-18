import { Box, TextField } from "@mui/material"
import Button from '@mui/material/Button';

import React from "react"
import Header from "../../components/header/Header"
import Bien from "../../components/listDesBiens/bien/Bien";
import {saveNewBien}from "../../xhr/BienRequets"

export default function AddBien(){
  const [bien,setBien]=React.useState({});
  const HandleChange=(e)=>{
    const newBien={...bien,
      [e.target.name]:e.target.value};
      setBien(newBien);
      console.log("newBien",newBien);
  }
  const HandleSave=()=>{
    console.log("save",bien);
    // saveNewBien(bien);
  }
    return(
        <>
        <Header/>
        <h2>ajouter un bien</h2>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-error"
          label="Name"
          name="name"
          onChange={HandleChange}
        />
        <TextField
          id="outlined-error"
          label="Nombre Piece"
          name="nombrePiece"
          onChange={HandleChange}
        />
        </div>
        <div>
        <TextField
          id="outlined-error"
          label="Addresse"
          name="adresse"
          onChange={HandleChange}
        />
        <TextField
          id="outlined-error"
          label="Prix"
          name="prix"
          onChange={HandleChange}
        />
        </div>
        <div>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          name="description"
          helperText="Incorrect entry."
          onChange={HandleChange}
        />
      </div>
      <div>
      <Button variant="contained" onClick={HandleSave}>Ajouter</Button>
      </div>

    </Box>

        </>
    )
}