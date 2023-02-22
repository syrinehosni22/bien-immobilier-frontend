import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/header/header";
import { loadAllBien } from "../xhr/BienRequets";
import Client from "../components/Client/Client";
import { store } from "../redux/store";
import axios from "axios";

export default function ClientListing() {
  const [clientList, setClientList] = useState([]);
  useEffect(() => {
    const token = store.getState().token;
    axios
      .get("http://localhost:8088/api/user/find", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setClientList(response.data);
        console.log("response", response.data);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <h2>List des clients</h2>
      <div className="list-des-clients">
        {clientList
          .filter((b) => b.role.id == 3)
          .map((b) => (
            <Client
              id={b.id}
              name={b.firstName}
              email={b.email}
              numero={b.phoneNumber}
              img={b.img}
            />
          ))}
      </div>
    </div>
  );
}
