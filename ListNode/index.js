class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class ListNode {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(valule);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
        // if (prev.value === value) {
        //           prev.next = prev.next.next;
        // }
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let cur = this.head;
    let i = 0;
    while (cur) {
      if (cur.value === value) return { value: cur.value, pations: i };
      cur = cur.next;
      i++;
    }
    return -1;
  }
  reverse() {
    let prev = null;
    let cur = this.head; // 20,10
    while (cur) {
      let next = cur.next; // 10
      cur.next = prev; // cur.next = null;
      prev = cur; // 20
      cur = next; // 10;
    }
    this.head = prev;
    return prev;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listString = "";
      while (curr) {
        listString += `${curr.value} `;
        //         console.log(curr.value);
        curr = curr.next;
      }
      console.log(listString);
    }
  }
}
// let obj = {vale: 3, next: {value: 5, next: {value: 4, next: {value:2, next:null}}}}
// const list = new ListNode();
// // console.log(list.isEmpty());
// // console.log(list.getSize());
// list.insert(10, 0);
// list.insert(20, 0);
// list.print();
// // list.removeFrom(10);
// console.log(list.reverse());
// // console.log(list.removeFrom(0));
// list.print();
// // console.log("remove list value ", list.removeValue(10));
// // console.log("search list value ", list.removeValue(10));
// // console.log((1/2).toFixed(3) );
// var allSumPairs = function (nums, target) {
//   let map = new Map();
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (map.get(target - nums[i]) || map.get(target - nums[i]) === 0) {
//       result.push([map.get(target - nums[i]), nums[i]])
//     } else {
//       map.set(nums[i], nums[i])
//     }
//   }
//   return result
// };
// let nums = [1, -9, 2, 4, 6, 4, -11,0,8],

//   target = 8;
// let sort = function (mat) {
//   let result = [];
//   for(let key in mat[0]) {
//     result.push([])
//   }
//   console.log(result);
//   for (let i=0;i<mat[0].length; i++) {
//     result[i] = addCol(mat, i)
//   }
//   return result;
// }
// let addCol = function (mat, i) {
//   let arr =[];
//   let count =0;
//   if(mat[0].length !== mat.length) {
//     count=1;
//   }
//     for(let j=0; j<mat[i].length-count; j++) {
//           arr.push(mat[j][i])
//     }
//     return arr;
// }
// console.log(sort([[1,2,3],[4,5,6]]));
const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = (arry) => arry.filter((item, index, arr) => arr.indexOf(item) == index)
const duplicateElementa = toFindDuplicates(arry);
let d = "bu olma nordon".split(" ")
console.log(d);
