'use strict';
import React, { Component } from 'react';
import { SuperCellIcon, HappyFaceIcon } from './icons';
import StatelessComponent from './statelessComponentExample';
import { Link } from 'react-router';

class App extends Component {
  render() {
    const style = {
      card: {
        width: '100%',
        background: '#fff',
        borderRadius: '5px',
        WebkitBoxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        padding: '30px 40px 30px 40px',
        margin: '10px',
      },
    };
    return (
    <div className='app-index'>

      <div className="row">
        <div className='card' style={style.card}>
          <h1 className='logo'>"App  Index Page"</h1>
        <p>Hello, this is a <strong>ES6 React Class Component! </strong>
        <HappyFaceIcon /><SuperCellIcon /></p>
        </div>
      </div>

      <div className="row">
        <div className='card' style={style.card}>
          <p>I use <strong>flexbox</strong> for my layouts!
          </p>
        </div>
        <div className='card' style={style.card}>
          <p>Check out the <strong><a href="/style-guide.html">Style Guide</a></strong></p>
        <p><Link to={'/style-guide'}>React StyleGuide</Link></p>
        </div>
        <div className='card' style={style.card}>
          <StatelessComponent phrase='React Stateless Component' />
        </div>
      </div>

    </div>
    );
  }
}

export default App;
