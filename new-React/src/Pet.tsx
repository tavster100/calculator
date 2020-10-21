import React, {FunctionComponent} from "react";
import {Photo} from '@frontendmasters/pet';
import { Link } from "@reach/router";

interface IProps
{
  name:string;
  animal:string;
  breed:string;
  media:Photo[];
  location:string;
  id:number;
}
const Pet: FunctionComponent <IProps>=props =>{
const { name, animal, breed, media, location, id } =props; 
  // -------------------------------------------------------------------------
  // destructuring {name,animal,breed} instead of props
  // return React.createElement("div", {}, [
  //  React.createElement("h1", {}, name /*props.name*/ ),
  // React.createElement("h2", {}, animal /* props.animal */ ),
  //  React.createElement("h2", {}, breed /* props.breed */ ),
  // ]);
  /* return (
    <div>
      <h1>Nume: {name.toUpperCase()}</h1>
      <h2>Tip:{animal}</h2>
      <h2>Specie:{breed}</h2>
    </div>
  );  */
  // ----------------------------------------------------------VARIANTA SIMPLA
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }


  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}/>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal}-${breed}-${location}`}</h2>
      </div>
    </Link>
  );
  }
export default Pet;