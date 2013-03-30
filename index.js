
/**
 * refs
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

function type(v){
  return types[toString.call(v)] || typeof v;
}

var types = {
  '[object Function]': 'function',
  '[object Date]': 'date',
  '[object RegExp]': 'regexp',
  '[object Arguments]': 'arguments',
  '[object Array]': 'array',
  '[object String]': 'string',
  '[object Null]': 'null',
  '[object Undefined]': 'undefined',
  '[object Number]': 'number',
  '[object Boolean]': 'boolean',
  '[object Object]': 'object',
  '[object Text]': 'textnode'
}

if (typeof window != 'undefined') {
  for (var el in window) if (/^HTML\w+Element$/.test(el)) {
    types['[object '+el+']'] = 'element'
  }
}

module.exports = type
type.types = types

type.specific = function(v){
  var general = type(v)
  var fn = type[general]
  if (fn) return fn(v)
  return general
}
