
import React from "react";
import Header from "../components/header/Header";
import Bien from "../components/listDesBiens/bien/Bien";
import {loadAllBien}from "../xhr/BienRequets"
import {useEffect,useState} from "react";
import axios from 'axios';


export default function BienListing(){
    // const listBiens=[{id:1,name:"bien",description:"somedescription ttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
    // {id:2,name:"bien",description:"some description tttttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
    // {id:3,name:"bien",description:"somedescription tttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"},
    // {id:4,name:"bien",description:"somedescription tttttttttttttttttttttttttttttttttttttt",img:"https://www.shutterstock.com/fr/image-photo/residential-building-public-green-park-during-382666645"}];
   const [listDesBiens,setListDesBiens]=useState([]);

    useEffect(() => {
        
        axios.get('http://localhost:8088/api/bienImmobilier/findAll/', {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbWlhQGdtYWlsLmNvbSIsImV4cCI6MTY3NjYwODk1NSwiaWF0IjoxNjc2NTcyOTU1fQ.HZOvyTZwJ337A8hkraHBqcYhq1qtjaKafuNQdgYjqzs`,
            },
          }).then( ( response ) => {
            setListDesBiens( response.data)
              console.log( response.data )
            } )
            .catch()
       
    }, [])
    
    return(
        <>
        <Header/>
        <h2>List des Biens</h2>
        <div className="list-des-biens">
        {listDesBiens.map((b)=>(
            <Bien id={b.id} key={b.id}name={b.name} description={b.description} img={b.img}/>
        )
        )}
        </div>
        
        </>
        
    )
}