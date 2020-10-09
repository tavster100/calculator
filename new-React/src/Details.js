import React from "react";
import pet from "@frontendmasters/pet";
class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      //this ->information that come from the parent!!
      //use => instead of function({animal}) !!!
      this.setState({
        //update the state from constructor(props)
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city},${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    });
  }
  render() {
    if (this.state.loading) {
      return <h1>loading ... </h1>;
    }

    const { animal, breed, location, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
//useState will not work inside of a class component

export default Details;
