function isFunction (fun) {
          return fun.constructor.name === 'Function'
}
function isArray (arr) {
          return arr.constructor.name === 'Array'
}
function isString (str) {
          return str.constructor.name === 'String'
}
function isBoolean (boolean) {
          return boolean.constructor.name === 'Boolean'
}
function isObject (obj) {
          return obj.constructor.name === 'Object'
}
function isNumber (num) {
          return num.constructor.name === "Number"
}
function isPromise (promes) {
         return promes.constructor.name === "AsyncFunction"
}
module.exports= {isArray, isBoolean, isFunction, isNumber,isObject,isString,isPromise}