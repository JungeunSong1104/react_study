import React from "react";

const root = document.getElementById("root");
const span = React.createElement("span", null, "hello I'm a span");
const btn = React.createElement("button", null, "Click me");
const container = React.createElement("div", null, [span, btn]);
ReactDOM.render(container, root);
