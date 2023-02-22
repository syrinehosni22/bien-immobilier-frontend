import React from "react";

export default function Client(props) {
  const { id, name, email, numero } = props;
  return (
    <div className="client-listing-component">
      <div>name:{name}</div>
      <div>email:{email}</div>
      <div>numéro:{numero}</div>
    </div>
  );
}
