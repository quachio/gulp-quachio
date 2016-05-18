'use strict';
import React, { Component } from 'react';
import packageJSON from '../../../package.json';
import { SuperCellIcon, HappyFaceIcon } from './icons';
import StatelessComponent from './statelessComponentExample';
import { Link } from 'react-router';

class App extends Component {
  render() {
    const version = packageJSON.version;

    return (
    <div className='container'>
      <header>
          <h1 className='logo'>"SuperCell <SuperCellIcon /> version {version}"</h1>
      </header>

      {this.props.children}
      
    </div>
    );
  }
}

export default App;
