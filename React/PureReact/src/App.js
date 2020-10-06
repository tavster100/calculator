const Pet = ({ name, animal, breed } /*props*/ ) => { //destructuring {name,animal,breed} instead of props
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name /*props.name*/ ), //instead of props.name / use just name 
        React.createElement("h2", {}, animal /* props.animal */ ), //instead of props.animal / use just animal 
        React.createElement("h2", {}, breed /* props.breed */ ), //instead of props.breed / use just breed 
    ]);
}


const App = () => {
    return React.createElement(
        "div", {}, [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Lara", animal: "Pisica", breed: "Corcitura" }),
            React.createElement(Pet, { name: "Aquaman", animal: "Caine", breed: "Corcitura" }),
            React.createElement(Pet, { name: "Nemo", animal: "Peste", breed: "Somon" })
        ] //children
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

//your code is going to go here, for now