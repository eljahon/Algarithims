// Recursion orqali n sonigacha bo'lagan sonlarining raqamlar yig'indsi va ko'paymasni toping ;
function recursionSum (n) {
    if (n === 0) return 0;
    return n+recursionSum(n-1);
};
console.log(recursionSum(10));
function recursionMultipl (n) {
    if (n === 1) return 1;
    return n*recursionMultipl(n-1);
};
console.log(recursionMultipl(10))