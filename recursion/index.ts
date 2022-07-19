// Recursion orqali n soniga bo'lagan sonlarining raqamlar yig'indsi va ko'paymasni toping ;
function RecursionSum (n:number): number {
    if (n === 0) return 0;
    return n+RecursionSum(n-1);
};
console.log(RecursionSum(10));
function RecursionMultipl (n:number): number {
    if (n === 1) return 1;
    return n*RecursionMultipl(n-1);
};
console.log(RecursionMultipl(10))