import "./style.css";

import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { MostRecentTimeList } from "./components/containers/mostRecentTimeList";
import { OldestTimeList } from "./components/containers/oldestTimeList";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <div>
            <MostRecentTimeList></MostRecentTimeList>
            <OldestTimeList></OldestTimeList>
        </div>
    </Provider>,
    document.getElementsByTagName("app-body")[0]
);
