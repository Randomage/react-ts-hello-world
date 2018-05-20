import React = require("react");
import { hot } from "react-hot-loader";

export interface HelloProps { compiler: string; framework: string; }

const TimeListComponent = ({ times } = { times: Date[] }) =>
    <div>
        <p></p>
    </div>;

export const TimeList = hot(module)(TimeListComponent);