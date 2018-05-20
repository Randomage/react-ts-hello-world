import * as React from 'react';
import { hot } from 'react-hot-loader';

class OnlyMeComponent extends React.Component<{ message: string }> {

  date = new Date().toString();

  render() {
    return <div>
      <h1>{this.props.message} at {this.date} !!!!</h1>
    </div >;
  }
}

export const OnlyMe = hot(module)(OnlyMeComponent);