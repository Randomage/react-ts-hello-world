import { Action } from "redux";
import { ActionType, getType } from "typesafe-actions";

import * as actions from "../actions/index";

export type TimesAction = ActionType<typeof actions>;

const initialState = { times: new Array<Date>() };

const removeOldestTime = (t: Date[]) => {
    const oldest = t.sort((a, b) => b.getTime() - a.getTime())[-1];
    const oldestIndex = t.indexOf(oldest);

    const withOldestRemoved = t.slice();
    withOldestRemoved.splice(oldestIndex, 1);

    return withOldestRemoved;
};

export const times = (state = initialState, action: TimesAction) => {

    switch (action.type) {
        case getType(actions.appendTime):
            return { times: [...state.times, action.payload] };

        case getType(actions.removeOldestTime):
            return { times: removeOldestTime(state.times) };
    }

    return state;
};
