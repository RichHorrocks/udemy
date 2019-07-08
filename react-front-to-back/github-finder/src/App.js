import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Navbar from './components/layout/Navbar';

class App extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
      </div>
    );
  }
}

export default App;
