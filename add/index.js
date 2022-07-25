// function siyga beriladigan Argumentlarining larning yig'indisini toping 
function addParams (...params) {
    console.log(params)
    const sum = params.reduce((intioValue, element) => intioValue+element, 0);
    return sum;
};
console.log(addParams(1,2,3,4));