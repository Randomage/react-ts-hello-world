import { List } from "immutable";
import { Action } from "redux";
import { ActionType, createStandardAction, getType } from "typesafe-actions";

export const appendTime = createStandardAction("APPEND_TIME")<Date>();

export const removeOldestTime = createStandardAction("REMOVE_OLDEST_TIME")();

export type TimesAction = ActionType<typeof appendTime | typeof removeOldestTime>;

interface State {
    readonly times: List<Date>;
}

const initialState = { times: List<Date>() };

const findOldestTimeIndex = (allTimes: List<Date>) => allTimes.indexOf(allTimes.min());

export default function reducer(state: State = initialState, action: TimesAction) {

    switch (action.type) {
        case getType(appendTime):
            return { times: state.times.push(action.payload) };

        case getType(removeOldestTime):
            return { times: state.times.remove(findOldestTimeIndex(state.times)) };
    }

    return state;
}
