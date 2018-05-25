import { List } from "immutable";
import { Action } from "redux";
import { ActionType, getType } from "typesafe-actions";

import * as actions from "../actions/index";

export type TimesAction = ActionType<typeof actions>;

interface State {
    readonly times: List<Date>;
}

const initialState = { times: List<Date>() };

const removeOldestTime = (allTimes: List<Date>) => {

    const oldestIndex = allTimes.indexOf(allTimes.min());

    return allTimes.remove(oldestIndex);
};

export const times = (state: State = initialState, action: TimesAction) => {

    switch (action.type) {
        case getType(actions.appendTime):
            return { times: state.times.push(action.payload) };

        case getType(actions.removeOldestTime):
            return { times: removeOldestTime(state.times) };
    }

    return state;
};
