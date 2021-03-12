import React from "react";
import { render } from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./ components/App";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/common.css";

render(<Router><App></App></Router>, document.getElementById("app"));