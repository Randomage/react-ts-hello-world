import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import './style.css';

import { rootReducer } from "./reducers";
import { MostRecentTimeList } from "./components/containers/mostRecentTimeList";
import { OldestTimeList } from "./components/containers/oldestTimeList";

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
