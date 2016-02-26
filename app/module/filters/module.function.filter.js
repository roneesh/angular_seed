// module.function.filter.js

/**
* @desc a filter for use in the module.html file
* @example in HTML:  {{ some_scope_variable_string | module}}
    -> results in 'XYZ' becoming 'xyz'
* @example in HTML: {{ some_scope_variable_string | module}}
    -> results in 'TEST' becoming 'test'
*/

app.filter('moduleFilter', moduleFilter);

function moduleFilter () {
  return function (str) {
    return str;
  };
}
