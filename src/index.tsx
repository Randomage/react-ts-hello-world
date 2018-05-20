import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import './style.css';

import { Hello } from "./components/hello";

const storage = createStore();

render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementsByTagName("app-body")[0]
);
