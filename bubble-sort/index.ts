//Average base;
let array: number [] = [5,3,1];
function bubbleSort(array:number[]): number[] {
    let len:number = array.length;
    for (let i=0; i<len; i++) {
        for (let j=0; j<len; j++) {
            if (array[j] > array[j+1]) {
                let max:number = array[i];
                array[i]=array[j+1];
                array[j+1] = max;
            }
        }
    }
    return array;
};
console.log(bubbleSort(array));
//Base 
function bubbleSortBase(array: number []): number[] {
    let len:number = array.length;
    for (let i=0; i< len; i++) {
        if (array[i] > array[i+1]) {
            array[i] = array[i]+array[i+1];
            array[i+1] = array[i]-array[i+1];
            array[i] = array[i]-array[i+1];
        }
    }
    return array;
};
console.log(bubbleSortBase(array));


