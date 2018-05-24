import * as React from "react";
import { hot } from "react-hot-loader";

const TimeListComponent = ({ times, addNewTime, removeOldestTime }:
    { times: Date[], addNewTime: () => void, removeOldestTime: () => void }) =>
    <div>
        <div>
            {
                times.map((t) => <p>{t.toISOString()}</p>)
            }
        </div>
        <button onClick={addNewTime}>Add new time</button>
        <button onClick={removeOldestTime}>Remove oldest time</button>
    </div>;

export const TimeList = hot(module)(TimeListComponent);
