import * as React from "react";
import { hot } from "react-hot-loader";

export interface TimeListProps {
    times: Date[];
    addNewTime: () => void;
    removeOldestTime: () => void;
}

const TimeListComponent: React.SFC<TimeListProps> = ({ times, addNewTime, removeOldestTime }) =>
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
