import React from "react";

export default function CharacterCard(props) {
  console.log("char card", props);
  return (
    <div>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.species} ({props.status})</p>
      <p>{props.location.name}</p>
    </div>
  );
}
