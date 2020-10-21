import React, { useState /* Suspense */ } from "react";
import { render } from "react-dom"; // IMPORTING reactDOM and react
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";
import LogRocket from "logrocket";
import Details from "./Details";
LogRocket.init("y4itbh/adopt-me");

const App = () => {
  const theme = useState("darkblue");
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
      <ThemeContext.Provider value={theme}>
        <div>
          <NavBar />
          {/* <Suspense fallback={<h1>loading route..</h1>}> */}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
          {/* </Suspense> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
// export default App;
// your code is going to go here, for now
