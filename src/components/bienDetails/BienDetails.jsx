import React from "react";
import Header from "../header/Header";

export default function BienDetails(){
    const Bien={name:"bien",nbPiece:"2",address:"manouba cite nour",prix:"200000",description:"somedescription ttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"};

    return(
        <>
           <Header/>
           <h2>details de bien</h2>
            <div> name:{Bien.name}</div>
            <div>nombre piece{Bien.nbPiece}</div>
            <div>adresse {Bien.address}</div>
            <div>prix:{Bien.prix}</div>
            <div> description:{Bien.description}</div>
           
        </>
    )
}