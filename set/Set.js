class mySet {
    constructor() {
        this.size = 0;
        this.data = {}
    }
    add(value) {
        this.data[value]= value;
        this.size++;
        
        return this.data;
    }
    has(key) {
        for (let [ky, value] in this.data) {
            if (`${key}` === ky) return true
        }
        return false;

    }
    delete(key) {
        delete this.data[key];
        this.size--;
    }
    clear() {
        this.data = {}
        this.size = 0;
    }
    keys() {
        const ky = [];
        for (let [key, value] in this.data) {
            ky.push(key)
        }
        return ky
    }
    values() {
        const value = [];
        for (let key in this.data) {
            value.push(this.data[key])
        }
        return value
    }
    entries() {
        const data = []
        for (let i in this.data) {
            data.push([i, this.data[i]])
        }
    }
}
const set = new mySet();
console.log(set.add(1))
console.log(set.add(1))
console.log(set.size);
// console.log(set.get(1));
console.log(set.has(1));
let s = new Set(["oranges", "apples", "bananas"]);

console.log(s);
// console.log(set.keys());
// console.log(set.values());