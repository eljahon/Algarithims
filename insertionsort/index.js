let array = [
  1, 2, 3, 4, 4, 5, 5345, 345, 435, 345, 534, 554, 34435, 43, 5434, 53, 45, 3,
  5, 5, 3, 5,
];
function insertionSort(array) {
  let len = array.length;
  for (let i = 1; i < len; i++) {
    let current = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(insertionSort(array));
