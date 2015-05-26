import React from 'react';

require('./Header.scss');

export class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        WebSite Header
      </div>
    );
  }
}

module.exports = Header;