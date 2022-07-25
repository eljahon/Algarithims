let array = [5,3,2];
//Average base;
function bubbleSort(array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let max = array[j];
                array[j] = array[j + 1];
                array[j + 1] = max;
            }
        }
    }
    return array;
};
console.log(bubbleSort(array));
//Base 
function bubbleSortBase(array) { 
    let len = array.length;
    for (let i=0; i<len; i++) {
        if (array[i] > array[i+1]) {
            array[i] = array[i]+array[i+1];
            array[i+1] = array[i]-array[i+1];
            array[i]= array[i]-array[i+1];
            i = -1;
        }
    };
    return array;
    
}
console.log(bubbleSortBase(array))

