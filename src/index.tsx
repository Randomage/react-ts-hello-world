import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import './style.css';

import { rootReducer } from "./reducers";
import { LastWeekTimeList } from "./components/containers/lastWeekTimeList";

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <LastWeekTimeList></LastWeekTimeList>
    </Provider>,
    document.getElementsByTagName("app-body")[0]
);
