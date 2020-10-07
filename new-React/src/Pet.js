import React from "react";

export default function Pet({ name, animal, breed }) {
  //destructuring {name,animal,breed} instead of props
  // return React.createElement("div", {}, [
  //  React.createElement("h1", {}, name /*props.name*/ ),
  // React.createElement("h2", {}, animal /* props.animal */ ),
  //  React.createElement("h2", {}, breed /* props.breed */ ),
  // ]);

  return (
    <div>
      <h1>Nume: {name.toUpperCase()}</h1>
      <h2>Tip:{animal}</h2>
      <h2>Specie:{breed}</h2>
    </div>
  );
}
