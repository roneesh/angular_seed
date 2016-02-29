/*
 * grunt-init-angular-module
 * https://github.searshc.com/UXFED/angular_module
 *
 * Originally written by Roneesh Vashisht (rvashis)
 * Properietary to Sears (not that it matters, it's all built off open source.)
 */

'use strict';

// Basic template description.
exports.description = 'Create an angular filter to be used in a project';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'app_name should be the name of your angular app as in the angular.module("app_name") declaration.' +
  'filter_name should refer to the functionality of the filter e.g. "removeCharacter" or "convertToCurrency", and be in camelCase only!' + '\n\n' + 'Prior to use, be sure seed app is fully installed and working (`npm install` and `bower install` should have been run).';

// Template-specific notes to be displayed after question prompts.
exports.after = 'Have fun!';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'jquery'}, [
    // Prompt for these values.
    init.prompt('app_name'),
    init.prompt('filter_name'),
  ], function(err, props) {
    // A few additional properties.
    props.snake_case_filter_name = props.filter_name.replace(/([A-Z])/g, function (x,y){return "_" + y.toLowerCase()});

    // Files to copy (and process).
    var files = init.filesToCopy();

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};