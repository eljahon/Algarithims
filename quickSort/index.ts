function quickSort<T>(array:T[]):T[] {
    if (array.length < 2) return array;
    let pivot = array[array.length - 1];
    let left = [];
    let rigth = [];
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        rigth.push(array[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(rigth)];
  }
  const array = [8, 20, 12, -1, 3, 4, -5];
  console.log(quickSort(array));