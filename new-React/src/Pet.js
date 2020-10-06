import React from "react";

export const Pet = ({
    name,
    animal,
    breed
} /*props*/ ) => {
    //destructuring {name,animal,breed} instead of props
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name /*props.name*/ ),
        React.createElement("h2", {}, animal /* props.animal */ ),
        React.createElement("h2", {}, breed /* props.breed */ ),
    ]);
};