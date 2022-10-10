// Recursion orqali n sonigacha bo'lagan sonlarining raqamlar yig'indsi va ko'paymasni toping ;
// function recursionSum (n) {
//     if (n === 0) return 0;
//     return n+recursionSum(n-1);
// };
// console.log(recursionSum(10));
// function recursionMultipl (n) {
//     if (n === 1) return 1;
//     return n*recursionMultipl(n-1);
// };
// console.log(recursionMultipl(10))
 function fib (n, a,b) {
    let s = a+b;
    console.log(s);
    if (n < 0) return 
    return fib(n-1, b, a+b)
 }
;
console.log(fib(5, 0,1));