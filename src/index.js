import React from "react";
import { render } from "react-dom";

const HelloWorld = () => <h1>Hello World</h1>

render(<HelloWorld></HelloWorld>, document.getElementById("app"));