import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1 className="navbar bg-primary">
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
