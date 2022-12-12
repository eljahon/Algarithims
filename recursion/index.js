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
//  function fib (n, a,b) {
//     let s = a+b;
//     console.log(s);
//     if (n < 0) return; 
//     return fib(n-1, b, a+b) 
//  }
//  Berilgan soning darajasini tpish 
// function pow (numr ,power) {
//     if (power === 1) {
//         return numr
//     };
//     return numr*pow(numr, power-1)
// };
// console.log(pow(2,6))
//  function paskalUchburchagi (row ,col) {
//     if (col > row) return 0;
//     if (col <= 1 || row <= 1)  return 1;
//     return paskalUchburchagi(row-1, col) + paskalUchburchagi(row-1, col-1)
//  };
//  function triangle(number) {
//     let string = "";
//     for (let row=1; row<=number; row++) {
//         for(let column=1; column<=row; column++) {
//             string += `${paskalUchburchagi(row, column)} `;
//         }
//         string += "\n";
//     }
//     console.log(string);
// }
// console.log(triangle(10));
// berilgan soning raqamlar yigindisni chiqaring faqat recursiya bn 
// function recursSumm(n) {
//   if (n < 10) return n;
//   const lastDigit = n % 10;
//   const remainingNum = Math.floor(n /10 );
//   return lastDigit+recursSumm(remainingNum)
  
// };
// console.log(recursSumm(3456));
// function recursSumm(n) {
//   if (n < 10) return n;
//   const lastDigit = n % 10;
//   const remainingNum = Math.floor(n /10 );
//   return recursSumm(lastDigit+recursSumm(remainingNum))
  
// };
// console.log(recursSumm(3456));
