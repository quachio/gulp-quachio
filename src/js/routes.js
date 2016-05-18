'use strict';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import components
import App from './components/app';
import AppIndex from './components/appIndex';
import StyleGuide from './components/styleGuide';

export default (
  <Route path='/' component= {App}>
    <IndexRoute component={AppIndex} />
    <Route path='style-guide' component= {StyleGuide}/>
  </Route>
);
