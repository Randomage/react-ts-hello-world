import { Action } from "redux";
import { ActionType, getType } from "typesafe-actions";

import * as actions from "../actions/index";

export type TimesAction = ActionType<typeof actions>;

interface State {
    readonly times: ReadonlyArray<Date>;
}

const initialState = { times: new Array<Date>() };

const removeOldestTime = (allTimes: ReadonlyArray<Date>) => {
    const copy = allTimes.slice();

    const oldest = copy.sort((a, b) => b.getTime() - a.getTime())[-1];
    const oldestIndex = copy.indexOf(oldest);

    copy.splice(oldestIndex, 1);

    return copy;
};

export const times = (state: State = initialState, action: TimesAction) => {

    switch (action.type) {
        case getType(actions.appendTime):
            return { times: [...state.times, action.payload] };

        case getType(actions.removeOldestTime):
            return { times: removeOldestTime(state.times) };
    }

    return state;
};
