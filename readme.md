# SuperCell 0.0.2

<a href="https://david-dm.org/joellongie/superCell">
  <img src="https://david-dm.org/joellongie/superCell/status.svg" alt="deps status"/>
</a>&nbsp;
<a href="https://david-dm.org/joellongie/superCell#info=devDependencies">
  <img src="https://david-dm.org/joellongie/superCell/dev-status.svg" alt="dev deps status"/>
</a>

> CHANGELOG 1.0.6, April 10, 2016     
> Updated 'react' and 'react-dom' packages to 15.0.1. Changed 'package.json' start script to start in production mode (see note below).  Font-Awesome support is depreciated and will be removed in future update.  Please use SVG sprites or superCellUI module import.  Notes on React 15.0.1 can be found at [https://facebook.github.io/react/blog/2016/04/08/react-v15.0.1.html](https://facebook.github.io/react/blog/2016/04/08/react-v15.0.1.html).


SuperCell is my current build system for Node, Moble and ES6+ React apps.  This build system replaces jlGulp and renames the build to reflect that it is no longer tied to any particular technology but will adapt over time as new and better technologies emerge.

Since this is used for my own projects I am currently not accepting public pull requests on this repo.  Other then that please feel free to use it however you like.

## YouTube Demo
[![SuperCell YouTube Demo](http://img.youtube.com/vi/bfuQAL1xkag/0.jpg)](https://www.youtube.com/watch?v=bfuQAL1xkag)

## Install Packages

After cloning the project to your computer run the following command in your terminal to install all required node packages.

	sudo npm install
	npm start  (or use "gulp", both will run the gulp command)

The first time you run gulp the build may take a little longer as it compiles and builds out the "public/css" and "public/js" folders and files.

## Important
When using "npm start" you are running react in 'production mode'.  This removes many of React 15.0+ warnings.  When in development you can change this in the package.json start script.  Change "NODE_ENV=production gulp" to just "gulp".  This will put react back in develoment node with a warning in the console like the one below:

> Note: by default, React 15.0+ will be in development mode. To use React in production mode, set the environment variable NODE_ENV to production (using envify or webpack's DefinePlugin). A minifier that performs dead-code elimination such as UglifyJS is recommended to completely remove the extra code present in development mode. [http://facebook.github.io/react/downloads.html](http://facebook.github.io/react/downloads.html)


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

- **src/.eslintrc:**  This file is a eslint config file for proper ES6+ sublimeText linting.  This file is not required and in the future will be removed.


## To Do
- add conditional statements for NODE_ENV
- add NODE_ENV environment variable to production for [better React performance](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#installation).
- Additional testing.

## How to remove React
If you would like to remove React from the build just follow the steps below.

1. In terminal remove react packages.

		sudo npm uninstall react react-dom --save-dev

2. In gulpfile.js

	Remove lines:

		var react         = require('react');
		var reactDOM      = require('react-dom');

3. In file src/index.js:

	Remove all React code from index.js.

      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './components/App';

      ReactDOM.render(
          <App phrase='React Component!'/>,
          document.querySelector('#app')
      );

6. In folder: src/ remove components folder.
