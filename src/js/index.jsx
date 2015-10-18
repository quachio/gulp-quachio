//react
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './demoReact.jsx';

ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    document.querySelector('#output')
);


//es6
import {es6Welcome} from './demoES6';
es6Welcome(6);


//es5
var es5Welcome = require('./demoES5');
es5Welcome(5);


// if you change this files extendtion to just .js remember to change in gulp file
// https://github.com/ModuleLoader/es6-module-loader/wiki/Brief-Overview-of-ES6-Module-syntax
console.log('javascript reporting in from index.jsx ...');




