import * as React from "react";
import { render } from "react-dom";
import './style.css';

import { Hello } from "./components/hello";

render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementsByTagName("app-body")[0]
);
