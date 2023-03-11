import { useState, useEffect } from "react";
import { store } from "../redux/store";

export default function ReclamationListing() {
  const [recalamation, setReclamation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = store.getState().token;

    async function fetchData() {
      const response = await fetch(
        "http://localhost:8088/api/reclamation/findAll",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      setReclamation(json);
      console.log("json", recalamation);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>liste des reclamations</h1>
      <div>
        {recalamation.map((r) => {
          return <div key={r.id}>description:{r.description}</div>;
        })}
      </div>
    </>
  );
}
