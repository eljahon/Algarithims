// function siyga beriladigan Argumentlarining larning yig'indisini toping 
function AddParams (...params) {
    console.log(params)
    const sum = params.reduce((intioValue, element) => intioValue+element, 0);
    return sum;
};
console.log(AddParams(1,2,3,4));