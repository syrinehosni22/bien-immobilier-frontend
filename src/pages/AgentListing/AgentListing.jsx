
 import React from 'react'
import Header from '../../components/header/Header';
import Agent from '../../components/Agent/Agent';
 
 export default function AgentListing() {
  const ListAgents=[{id:1,name:"amira Dhflaoui",profession:"devloppeur"},
  ,{id:2,name:"amira Dhflaoui",profession:"devloppeur"}
,{id:3,name:"amira Dhflaoui",profession:"devloppeur"}];

return(
  <>
    <Header/>
    <h2>List des agents</h2>
    <div className="list-des-agents">
       {ListAgents.map((a)=>(
       <Agent  id={a.id} name={a.name} profession={a.profession}/>)
      )}
    </div>
  
  </>
  
)
 }
 