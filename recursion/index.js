// Recursion orqali n sonigacha bo'lagan sonlarining raqamlar yig'indsi va ko'paymasni toping ;
function RecursionSum (n) {
    if (n === 0) return 0;
    return n+RecursionSum(n-1);
};
console.log(RecursionSum(10));
function RecursionMultipl (n) {
    if (n === 1) return 1;
    return n*RecursionMultipl(n-1);
};
console.log(RecursionMultipl(10))