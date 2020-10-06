import React from "react";
import ReactDOM, { render } from "react-dom"; //IMPORTING reactDOM and react
import Pet from "./Pet";
const App = () => {
    /* return React.createElement(
        "div", {}, [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Lara",
                animal: "Pisica",
                breed: "Corcitura",
            }),
            React.createElement(Pet, {
                name: "Aquaman",
                animal: "Caine",
                breed: "Corcitura",
            }),
            React.createElement(Pet, {
                name: "Nemo",
                animal: "Peste",
                breed: "Somon",
            }),
        ] //children
    ); */

    return(
        <div >
            <h1 id="something-important" >Adopt ME!</h1>
            <Pet name="Lara" animal="Pisica" breed="Corcitura"></Pet>
            <Pet name="Aquaman" animal="Caine" breed="Corcitura"></Pet>
            <Pet name="Nemo" animal="Peste" breed="Somon"></Pet>
        </div>
    );
};

//ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(<App/>,document.getElementById("root"));

//your code is going to go here, for now