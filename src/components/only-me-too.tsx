import * as React from 'react';
import { hot } from 'react-hot-loader';

export interface OnlyMeTooProps { message: string; }

const OnlyMeTooComponent = (props: OnlyMeTooProps) => <div>
    <h1>{props.message} too at {new Date().toString()}!</h1>
</div>;

export const OnlyMeToo = hot(module)(OnlyMeTooComponent);