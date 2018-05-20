import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export interface Time {
    time: Date;
}

export const appendTime = actionCreator<Time>('APPEND_TIME', (time: Date) => ({
    time
}));