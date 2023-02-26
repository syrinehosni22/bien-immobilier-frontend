import { useEffect, useState } from "react";
import { store } from "../../redux/store";

export default function ReservationListing() {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = store.getState().token;

    async function fetchData() {
      const response = await fetch(
        "http://localhost:8088/api/reservation/findAll",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      setReservations(json);
      console.log("json", reservations);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>liste des réservations</h1>
      <div>
        {reservations.map((r) => {
          return <div key={r.id}>montant:{r.montant}</div>;
        })}
      </div>
    </>
  );
}
