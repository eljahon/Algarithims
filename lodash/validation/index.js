const  {isArray, isBoolean,isFunction,isNumber,isObject,isPromise,isString}  = require('./datatypes/proto')
// const  {isArray, isBoolean,isFunction,isNumber,isObject,isPromise,isString}  = require('./datatypes/constructor')
 async function na () {
          return ''
}
console.log(isArray([]))
console.log(isBoolean(true))
console.log(isNumber(23))
console.log(isObject({}))
console.log(isString(''))
console.log(isFunction(function n (){}))
console.log(isPromise(na));