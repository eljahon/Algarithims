function isFunction (fun) {
          const ref = new Function();
          const checkFun = fun;
          return checkFun.__proto__ === ref.__proto__;
}
function isArray (arr) {
          const ref = new Array();
          const checkArr = arr;
          return checkArr.__proto__ === ref.__proto__;
}
function isString (str) {
          const ref = new String();
          const checkStr = str;
          return checkStr.__proto__ === ref.__proto__;
}
function isBoolean (boolean) {
          const ref = new Boolean();
          const checkBool = boolean;
          return checkBool.__proto__ === ref.__proto__;
}
function isObject (obj) {
          const ref = new Object();
          const checkObj = obj;
          return checkObj.__proto__ === ref.__proto__;
}
function isNumber (num) {
          const ref = new Number();
          const checkNum = num;
          return checkNum.__proto__ === ref.__proto__;
}
function isPromise (fun) {
          console.log(fun=== Promise);
          return Promise.__proto__ === fun.__proto__;
}
module.exports= {isArray, isBoolean, isFunction, isNumber,isObject,isString,isPromise}