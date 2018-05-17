import * as React from 'react';
import { hot } from 'react-hot-loader';

export interface OnlyMeProps { message: string; }

const OnlyMeComponent = (props: OnlyMeProps) => <div>
    <h1>{props.message} at {new Date().toString()}!!!!</h1>
</div>;

export const OnlyMe = hot(module)(OnlyMeComponent);