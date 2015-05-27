import React from 'react';

require('./styles/commons.scss');

import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';

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
        <Header />
        WebSite Content
        <Footer />
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