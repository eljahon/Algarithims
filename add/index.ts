function AddParams (...params: number[]): number {
    const sum:number =params.reduce((intionValue:number, element:number) => intionValue+element, 0)
    return sum;
};
console.log(AddParams(1,2,3));



