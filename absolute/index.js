// Arrayning o'rtasidagi elementni topish
function Absolute (array) {
    const isEven  = array.length%2 ===0;
    return isEven ? array[array.length/2-1] : array[Math.floor(array.length/2)];
};
console.log(Absolute([1,2,3,4,4]));