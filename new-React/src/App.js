import React, { useState } from "react";
import { render } from "react-dom"; //IMPORTING reactDOM and react
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
const App = () => {
  const themeHook = useState("darkblue");
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

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">
              <h1 id="something-important">Adopt Me!</h1>
            </Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id"></Details>
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

//ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));

//your code is going to go here, for now
