/*
 * grunt-init-angular-module
 * https://github.searshc.com/UXFED/angular_module
 *
 * Originally written by Roneesh Vashisht (rvashis)
 * Properietary to Sears (not that it matters, it's all built off open source.)
 */

'use strict';

// Basic template description.
exports.description = 'Create an angular module to be used in a project';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'app_name should be the name of your angular app as in the angular.module("app_name") declaration.' +
  'module_name should refer to the functionality of the module e.g. "storeLocator" or "productList", and be in camelCase only!' + '\n\n' + 'Prior to use, be sure seed app is fully installed and working (`npm install` and `bower install` should have been run).';

// Template-specific notes to be displayed after question prompts.
exports.after = 'Have fun!';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'jquery'}, [
    // Prompt for these values.
    init.prompt('app_name'),
    init.prompt('module_name'),
  ], function(err, props) {
    // A few additional properties.
    props.upper_case_module_name = props.module_name.charAt(0).toUpperCase() + props.module_name.slice(1);
    props.snake_case_module_name = props.module_name.replace(/([A-Z])/g, function (x,y){return "_" + y.toLowerCase()});
    props.get_module_name = 'get' + props.upper_case_module_name;

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    var projectRoot = __filename.split('/templates')[0];
    grunt.file.mkdir(projectRoot + '/app/' + snake_case_module_name);
    // Actually copy (and process) files.
    init.copyAndProcess(files, props);
    grunt.file.mkdir('./directives');
    grunt.file.mkdir('./filters');

    // Append less file to app.less
    var appLess = grunt.file.read(projectRoot + '/app/global/app.less');
    appLess = appLess + "\n@import '" + props.snake_case_module_name + "';";
    grunt.file.write('../../app/global/app.less', appLess);
    
    // All done!
    done();
  });

};