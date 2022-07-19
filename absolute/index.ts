// Arrayning o'rtasidagi elementni topish
function Absolute (num: number[]): number {
const isEven:boolean = num.length%2 === 0;
return isEven ? num[num.length/2-1] : num[Math.floor(num.length/2)]
};
console.log(Absolute([1,2,3,4,4]));