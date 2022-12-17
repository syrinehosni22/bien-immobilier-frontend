import React from "react";
import Header from "../header/Header";
import Bien from "./bien/Bien";
import {loadAllBien}from "../../xhr/BienRequets"
import {useEffect,useState} from "react";

export default function BienListing(){
    const listBiens=[{id:1,name:"bien",description:"somedescription ttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
    {id:2,name:"bien",description:"some description tttttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
    {id:3,name:"bien",description:"somedescription tttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
    {id:4,name:"bien",description:"somedescription tttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"}];
//    const [listDesBiens,setListDesBiens]=useState([]);

//     useEffect(() => {
//         loadAllBien().then((data)=>{
//         setListDesBiens(data.response);
//         }
//         )
//     }, [])
    
    return(
        <>
        <Header/>
        <h2>List des Biens</h2>
        <div className="list-des-biens">
        {listBiens.map((b)=>(
            <Bien id={b.id} name={b.name} description={b.description} img={b.img}/>
        )
        )}
        </div>
        
        </>
        
    )
}