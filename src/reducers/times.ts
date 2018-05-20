import { Fsa } from "../actions/fsa";
import { handleAction } from 'redux-actions';
import { appendTime, Time } from '../actions/index';
import { Action } from "redux";
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export const times = reducerWithInitialState(new Array<Time>())
    .case(appendTime, (state, payload) => {
        return [...state, payload];
    });