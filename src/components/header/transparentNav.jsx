import * as React from "react";
import "./header.css";
import { useEffect, useState } from "react";
import { store } from "../../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItemsClient = [
  { title: "Liste des Biens", path: "/lesBiens" },
  { title: "Réservation", path: "/reservation" },
  { title: "Réclamation", path: "/reclamation" },
];
const navItemsAgent = [
  { title: "Liste des Biens", path: "/" },
  { title: "Listes des clients ", path: "/clients" },
  { title: "Réservation", path: "/reservation" },
  { title: "Réclamation", path: "/reclamation" },
];
const navItemsAdmin = [
  { title: "Liste des Biens", path: "/lesBiens" },
  { title: "Listes des clients ", path: "/clients" },
  { title: "Listes des agents ", path: "/agents" },
  { title: "Réservation", path: "/reservation" },
  { title: "Réclamation", path: "/reclamation" },
];

export function TransparentNav() {
  const role = useSelector((state) => state.role);
  return (
    <div>
      <nav className="navContainer container">
        <ul className="first">
          <li className="nav-title">Neho</li>
        </ul>
        {role == "admin" &&
          navItemsAdmin.map((item) => {
            return (
              <ul>
                <li className="nav-list">
                  <Link className="nav-item" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              </ul>
            );
          })}
        {role == "agent" &&
          navItemsAgent.map((item) => {
            return (
              <ul>
                <li className="nav-list">
                  <Link className="nav-item" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              </ul>
            );
          })}
        {role == "client" &&
          navItemsClient.map((item) => {
            return (
              <ul>
                <li className="nav-list">
                  <Link className="nav-item" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              </ul>
            );
          })}
      </nav>
    </div>
  );
}

export default TransparentNav;
