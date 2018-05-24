import * as React from "react";
import { hot } from "react-hot-loader";

const TimeListComponent = ({ times, onClick }: { times: Date[], onClick: () => void }) =>
    <div>
        <div>
            {
                times.map((t) => <p>{t.toISOString()}</p>)
            }
        </div>
        <button onClick={onClick}>Click me</button>
    </div>;

export const TimeList = hot(module)(TimeListComponent);
