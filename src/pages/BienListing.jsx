import React from "react";
import Header from "../components/header/header";
import Bien from "../components/listDesBiens/bien/Bien";
import AgencePresentaion from "../components/agencePresentation/agencePresentation";
import { loadAllBien } from "../xhr/BienRequets";
import { useEffect, useState } from "react";
import axios from "axios";
import { store } from "../redux/store";
import Button from "@mui/material/Button";

export default function BienListing() {
  // const listBiens=[{id:1,name:"bien",description:"somedescription ttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
  // {id:2,name:"bien",description:"some description tttttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
  // {id:3,name:"bien",description:"somedescription tttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
  // {id:4,name:"bien",description:"somedescription tttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"}];
  const [listDesBiens, setListDesBiens] = useState([]);

  useEffect(() => {
    const token = store.getState().token;
    console.log(token);

    axios
      .get("http://localhost:8088/api/bienImmobilier/findAll/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListDesBiens(response.data);
        console.log(response.data);
      })
      .catch();
  }, []);

  return (
    <>
      <Header />
      <AgencePresentaion />
      <div className="container">
        <h2>List des Biens</h2>
        <Button variant="outlined" href="/addBien" className="primary-button">
          Ajouter un bien
        </Button>
        <div className="list-des-biens">
          {listDesBiens.map((b) => (
            <Bien
              id={b.id}
              key={b.id}
              name={b.name}
              description={b.description}
              img={b.img}
            />
          ))}
        </div>
      </div>
    </>
  );
}
