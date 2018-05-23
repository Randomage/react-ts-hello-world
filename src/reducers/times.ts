import { appendTime } from '../actions/index';
import { Action } from "redux";

const initialState = { times: new Array<Date>() };

export const times = (state = initialState, action: any) => {

    switch (action.type) {
        case 'APPEND_TIME':
            return { times: [...state.times, action.payload] };
    }

    return state;
}