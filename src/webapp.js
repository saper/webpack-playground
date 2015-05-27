import React from 'react';

require('./styles/commons.scss');

import TopBar from './modules/TopBar/TopBar';
import StatusBar from './modules/StatusBar/StatusBar';

// Dataset
var data = [
  // { id: "0" }
];

// App state
var state = {
  data: data
}

export class RootComponent extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        WebApp Content
        <StatusBar />
      </div>
    );
  }
}

// Render
function render(state) {
  React.render(
    <RootComponent data={state.data}/>, document.getElementById('root')
  );
}

render(state);