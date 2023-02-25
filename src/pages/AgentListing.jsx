import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/header/header";
import Agent from "../components/Agent/Agent";
import { store } from "../redux/store";
import axios from "axios";

export default function AgentListing() {
  const [ListAgent, setListAgent] = useState([]);
  useEffect(() => {
    const token = store.getState().token;
    axios
      .get("http://localhost:8088/api/user/find", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListAgent(response.data);
        console.log("response", response.data);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <h2>List des agents</h2>
      <Button variant="outlined" href="/addAgent" className="primary-button">
        Ajouter un agent
      </Button>
      <div className="list-des-agents">
        {ListAgent.filter((b) => b.role.id == 2).map((a) => (
          <Agent
            id={a.id}
            name={a.firstName}
            email={a.email}
            numero={a.phoneNumber}
          />
        ))}
      </div>
    </div>
  );
}
