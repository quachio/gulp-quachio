'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

// hashHistory (hash-based URLs, browserHistory (HTML5 pushState "pretty" URLs)
import { Router, hashHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router history={ hashHistory } routes={routes} />,
  document.querySelector('#app')
);
