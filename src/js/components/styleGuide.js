'use strict';
import React from 'react';
import { Link } from 'react-router';

const StyleGuide = (props) => (
  <div className='style-guide'>
    <h1>I am the style guide</h1>
    <p><Link to={'/'}>Close Style Guide</Link></p>
  </div>
);

export default StyleGuide;
