import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CardList from "./CardList";

import "tachyons";
// if export is not export default, export by name instead, it should be destructured
import { robots } from "./robots";

ReactDOM.render(
    <div>
        <CardList robots={robots} />
    </div>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
