// {%= filter_name %}.filter.js

/**
* @desc a filter for use in a view file
* @example in HTML:  {{ some_scope_variable_string | module}}
    -> results in 'XYZ' becoming 'xyz'
* @example in HTML: {{ some_scope_variable_string | module}}
    -> results in 'TEST' becoming 'test'
*/

angular
    .module('{%= app_name %}')
    .filter('{%= filter_name %}Filter', {%= filter_name %}Filter);

function {%= filter_name %}Filter () {
  return function (str) {
    return str;
  };
}