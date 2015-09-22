ngcq5
==================

## Prerequisites
1. Install [node and npm](http://www.nodejs.org)
2. Install **Grunt** running `npm install -g grunt-cli`
3. Install **Bower** running `npm install -g bower`

## Developement
* Run `grunt dev` to start a static web server and open your browser. This will serve files from the `app` folder.
* Run `grunt prod` to start a static web server and open your browser. This will serve files from the `dist` folder. So your files will be minified etc.,
* Livereload will be automatically active for both, meaning that you can see your modification on the browser without hitting F5.
* `jshint` and/or `csslint` will be run on your files when they change.
* If you choose to have unit tests, they will be run as your test and source files change.

## Package for Production
* Run `grunt package` to package your static assets for production.
* Your package will be generated in a `dist` folder and your javascripts and stylesheets will be concatenated, minified and versionned.
* The files you will need to carry over into CQ5 (JS, CSS, HTML) will be in the dist folder.

## Available Grunt tasks
* `grunt test:unit` : run karma unit tests and show test coverage in console.
* `grunt report` : open complexity report in your browser