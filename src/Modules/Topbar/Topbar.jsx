import React from 'react';

require('./TopBar.scss');

export class TopBar extends React.Component {
  render() {
    return (
      <div className="TopBar">
        WebApp TopBar
      </div>
    );
  }
}

module.exports = TopBar;