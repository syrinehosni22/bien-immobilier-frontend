import React from "react";
import Header from "../header/Header";
import Bien from "./bien/Bien";

export default function BienListing(){
    const listBiens=[{name:"bien",description:"somedescription ttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
    {name:"bien",description:"some description tttttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
    {name:"bien",description:"somedescription tttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
    {name:"bien",description:"somedescription tttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"}];

    return(
        <>
        <Header/>
        <h2>List des Biens</h2>
        <div className="list-des-biens">
        {listBiens.map((b)=>(
            <Bien name={b.name} description={b.description} img={b.img}/>
        )
        )}
        </div>
        
        </>
        
    )
}