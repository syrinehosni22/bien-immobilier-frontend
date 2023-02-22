import React from "react";

export default function Agent(props) {
  const { id, name, email, numero } = props;
  return (
    <div className="agents-listing-component">
      <div>name:{name}</div>
      <div>email:{email}</div>
      <div>numéro:{numero}</div>
    </div>
  );
}
