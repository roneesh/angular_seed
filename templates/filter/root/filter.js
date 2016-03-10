/**
 * @ngdoc filter
 * @name {%= filter_name %}.filter:{%= filter_name %}.
 * @description 
 * filter to do some task
 * @param {String} text that somehow gets filtered.
 **/

angular
    .module('{%= app_name %}')
    .filter('{%= filter_name %}', {%= filter_name %});

function {%= filter_name %} () {
  return function (str) {
    return str;
  };
}