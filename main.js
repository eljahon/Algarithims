// function s(n) {
//   let newarr = [],
//     resolut = 0,
//     list = [];
//   for (let i = 0; i <= n; i++) {
//     newarr.push(i);
//   }

//   let h = newarr.map((el) => el.toString(2).padStart(8, "0"));
//   function checkString(s) {
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === "1") {
//         count++;
//       }
//     }
//     return count > 0 ? count : 0;
//   }
 
// }
// console.log();
// function bit (a) {
//           let bits = a.toString(2).padStart(7, '0');
//    let resoult = [...bits].reverse().join('');
//    console.log(bits, resoult);
//    return parseInt(resoult, 2).toString(10);
// };
// console.log(bit(8));
// function Dos (n) {
//    let g = parseInt(parseInt(n,2).toString(10));
//    return g;
// };
// let n = "11111111111111111111111111111101";
// console.log(Dos(n));

function fib (n, a=0,b=1) {
          let c = a+b;
          if (n < 0) return c;
          return fib(n-1, a = b, b = a+b)
//           let arr =[0,1];
// for (let i=0; i<=n; i++) {
//           let s = arr[i]+arr[i+1];
//           arr.push(s)
}
return arr;
};
console.log(fib(3));

