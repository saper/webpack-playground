import React from 'react';

require('./StatusBar.scss');

export class StatusBar extends React.Component {
  render() {
    return (
      <div className="StatusBar">
        WebApp StatusBar
      </div>
    );
  }
}

module.exports = StatusBar;