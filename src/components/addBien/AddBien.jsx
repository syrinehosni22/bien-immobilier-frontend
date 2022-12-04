import { Box, TextField } from "@mui/material"
import React from "react"
import Header from "../header/Header"

export default function AddBien(){
    return(
        <>
        <Header/>
        <h2>form add bien</h2>

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
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
    </Box>

        </>
    )
}