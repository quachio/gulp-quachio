# SuperCell 1.0.7

<a href="https://david-dm.org/joellongie/superCell">
  <img src="https://david-dm.org/joellongie/superCell/status.svg" alt="deps status"/>
</a>&nbsp;
<a href="https://david-dm.org/joellongie/superCell#info=devDependencies">
  <img src="https://david-dm.org/joellongie/superCell/dev-status.svg" alt="dev deps status"/>
</a>

> CHANGELOG 1.0.7, May 6, 2016     
> Removed Font-Awesome.  "npm start" now starts app in 'development' mode, "npm run production" runs app in production mode with minified js files.  Notes on React 15.0.1 can be found at [https://facebook.github.io/react/blog/2016/04/08/react-v15.0.1.html](https://facebook.github.io/react/blog/2016/04/08/react-v15.0.1.html).


SuperCell is my current build system for Node, Moble and ES6+ React apps.  This build system replaces jlGulp and renames the build to reflect that it is no longer tied to any particular technology but will adapt over time as new and better technologies emerge.

Since this is used for my own projects I am currently not accepting public pull requests on this repo.  Other then that please feel free to use it however you like.

## YouTube Demo
[![SuperCell YouTube Demo](http://img.youtube.com/vi/bfuQAL1xkag/0.jpg)](https://www.youtube.com/watch?v=bfuQAL1xkag)

## Install Packages

After cloning the project to your computer run the following command in your terminal to install all required node packages.

    sudo npm install

The first time you run gulp the build may take a little longer as it compiles and builds out the "public/css" and "public/js" folders and files.

## Running App
This build system can be run in two modes: development and production.  Use development when you are developing your app.  In this mode your JS will not be minified, React will include all its warnings and your CSS will contain sourcemaps to the original SCSS files.  When you are ready to deploy you can start the app in production mode which will turn off React warnings, uglify your JS, and turn off sourcemaps for both JS and CSS.

    npm start  (starts app in development mode)  
    npm run production (starts app in production mode)

## Important

When using "npm start" you are running react in 'development mode'.  "npm run production" runs react in 'production mode' removing many of React 15.0+ warnings.  See this link for more info [http://facebook.github.io/react/downloads.html](http://facebook.github.io/react/downloads.html).


## Features

- ES6+ with Babel.  Use all the new niffty ES6+ features and transpile down to ES5.
- Browserify: JSX transforms, ES6 modules.
- React Ready!
- Uglify: minification.
- BrowserSync.
- Sass / flexbox ready (IE10+), layout for everygreen browsers.

## How to use

Precompiled JS and SCSS files are in the src folder and compile to public.  All other files including HTML, image etc. are in public.  BrowserSync runs from public and serves as the "Dist" folder for client-side apps.


## To Do
- more testing

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
