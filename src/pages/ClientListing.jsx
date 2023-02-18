import React from "react";
import Header from "../components/header/Header";
import {loadAllBien}from "../xhr/BienRequets"
import Client from "../components/Client/Client";

export default function ClientListing(){
    const ListCliens=[{id:1,name:"amira Dhflaoui",profession:"devloppeur"},
        ,{id:2,name:"amira Dhflaoui",profession:"devloppeur"}
    ,{id:3,name:"amira Dhflaoui",profession:"devloppeur"}];
    
    return(
        <>
          <Header/>
          <h2>List des clients</h2>
          <div className="list-des-clients">
             {ListCliens.map((b)=>(
             <Client  id={b.id} name={b.name} profession={b.profession} img={b.img}/>)
            )}
          </div>
        
        </>
        
    )
}