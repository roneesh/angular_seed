ngcq5
==================

## Prerequisites
1. Install [node and npm](http://www.nodejs.org)
2. Install **Grunt** running `npm install -g grunt-cli`
3. Install **Bower** running `npm install -g bower`
4. Install **grunt-init** running `npm install -g grunt-init`
5. `npm install` -- This installs tools for development like grunt and karma
6. `bower install` -- This installs libaries like Angular

## Personalize the Project
*There are a few places where you'll need to change names to suit your project, instead of using the default name of 'ngcq5'
1. In the Gruntfile, change the 'asapDir' and 'asapComponentName', 'asapDir' is the path of your 'asap' project folder, e.g. '/Users/some_folder/asap', and 'asapComponentName' is the name of your asap component, e.g 'carousel' or 'productCard'
2. In app/index.html, change the names of the build files in the build:css and build:js comments.
3. change the name of the folder to your componetns name in asap for the folder below app/etc/designs/shc/


## Using Generators via grunt-init
* The templates folder holds three generator folders: directive, filter and module
* To run a generator you simply run `grunt-init relative/path/to/geneator/folder`, it is unecessary to run the template.js file at all.
* Some example commands: `grunt-init ./templates/module`, or `grunt-init ../../templates/directive`
* The generator will create the files in whatever folder you are currently inside of in Terminal, so make sure you are in the folder where you want the files to be created
* The module folder will create our style of module for an angular project, it will create our desired folder structure and style of writing a contorller and factory, it will also create folders to put directives and filters
* The directive and filter folders are generators to create a single directive or filter file, respectively. 

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

## Other Grunt tasks
* `grunt test:unit` : Package and run karma unit tests. This is also run automatically as a pre-commit hook.
* `grunt report` : open complexity report in your browser

## CQ5 gotchas
* The module `page` present in `author.js` is mocking what comes from a CQ5 author. It is not part of the js files which get
minified and bundled. Its runtime conterpart comes from script on the JSP (see `sampleCQ5JSP.jsp`)
* angular.min.js is also packaged from CQ5 directly as it's already present as a node.

## Steps to get started
* Clone this repo
* Rename the project by changing the name in app.js, package.json, index.html, and bower.json.
* Remove/Modify existing bootstrap controllers, routes, views as needed.
* Package and move to CQ5.

## Wiredep
Wiredep that's used by this project uses conventions in the index.html file to figure out what files to minify.
It also generates into index.html the list of external dependencies from bower.json. Read this for a better understanding : https://github.com/stephenplusplus/grunt-wiredep

## Issues
* Moving partial views to CQ5 (right now in this repo grunt copy:toasap is broken) -- going back to old view structure
* Routing has to handle view files in module folders changing to the 'etc/cq5/route' -- going back to old view structure

* all grunt tasks have to still work
* moving views to cq5 has to be easy and bug free -- grunt copy task for this
* adding script tags to index.html via grunt