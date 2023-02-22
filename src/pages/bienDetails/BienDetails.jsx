import React from "react";
import Header from "../../components/header/header";
import { useEffect, useState } from "react";
import { loadBienWithId } from "../../xhr/BienRequets";
import { useParams } from "react-router-dom";

export default function BienDetails() {
  const Bien = {
    name: "bien",
    nbPiece: "2",
    address: "manouba cite nour",
    prix: "200000",
    description: "somedescription ttttttttttttttttttttttttttttttttt",
    img: "https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645",
  };
  const params = useParams();
  console.log(params.bienId);
  // const [bienDetail,setBienDetail]=useState({})
  // useEffect(() => {
  //     loadBienWithId(params.bienId).then((data)=>{
  //     setBienDetail(data.response);
  //     }
  //     )
  // }, [])
  return (
    <>
      <Header />
      <h2>details de bien</h2>
      <div> name:{Bien.name}</div>
      <div>nombre piece{Bien.nbPiece}</div>
      <div>adresse {Bien.address}</div>
      <div>prix:{Bien.prix}</div>
      <div> description:{Bien.description}</div>
    </>
  );
}
