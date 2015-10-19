# SuperCell 0.01.0

SuperCell is my current build system for Node, Express and ES6+ React apps.  This build system replaces jlGulp and renames the build to reflect that it is no longer tied to any particular technology but will adapt over time as new and better technologies emerge. 

Since this is used for my own projects I am currently not accepting pull requests on this repo.  Other then that please feel free to use it however you like.

## Install Packages

After cloning the project to your computer run the following command in your terminal to install all required node packages.

	sudo npm install
	gulp	
		


## Features

- ES6+ with Babel.  Use all the new niffty ES6+ features and transpile down to ES5.
- Browserify: JSX transforms, ES6 modules.
- React Ready!
- Uglify: minification.
- BrowserSync.
- Sass / flexbox ready (IE10+), layout for everygreen browsers.

## How to use

Precompiled JS and SCSS files are in the src folder and compile to public.  All other files including HTML, image etc. are in public.  BrowserSync runs from public and serves as the "Dist" folder for client-side apps.

## Other

- **src/.jshintrc:**  This file is a jshint config file for proper ES6+ sublimeText linting.  This file is not required and in the future will be removed.


## To Do
- Research webpack as alternative for Gulp to improve build speed and optimization.

## How to remove React
If you would like to remove React from the build just follow the steps below.

1. In terminal remove react packages.

		sudo npm uninstall react react-dom --save-dev

2. In gulpfile.js 

	Remove lines:
 
		var react         = require('react');
		var reactDOM      = require('react-dom');

	Change line:
	
		entries: ['./src/js/index.jsx'],
		to
		entries: ['./src/js/index.js'],

3. Change file: src/index.jsx to src/index.js

4. In file src/index: 
	
	Remove all React code.

		import React from 'react';
		import ReactDOM from 'react-dom';
		import HelloWorld from './demoReact.jsx';

		ReactDOM.render(
		    <HelloWorld phrase="ES6"/>,
		    document.querySelector('#output')
		);

6. In folder: src/ remove any jsx files.
