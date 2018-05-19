import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as image from '../6824946720.png';
import printMessage from '../message';
import { OnlyMe } from './only-me';
import { OnlyMeToo } from './only-me-too';

export interface HelloProps { compiler: string; framework: string; }

const HelloComponent = (props: HelloProps) => <div>
    <h1>Hello from {props.compiler} and {props.framework} at {new Date().toString()}!</h1>
    <img src={image}></img>
    <OnlyMe message="om"></OnlyMe>
    <OnlyMeToo message="Only me"></OnlyMeToo>
    <button onClick={printMessage}>Click me</button>
</div>;

export const Hello = hot(module)(HelloComponent);