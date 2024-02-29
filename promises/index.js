class Promise {

    all (promises) {

        const outputs =[];
        let setledPromiseCount =0;
        return new Promise((resolve, reject) => {
            promises.forEach((promise, i) => {
                promise.then((value) => {
                    outputs[i] =value;
                    setledPromiseCount++;
                    if(setledPromiseCount === outputs.length) {
                        resolve(outputs)
                    }
                }).catch(reject)
            });
        })
    }


    allSettled (promises) {
        const outputs =[];
        let setledPromiseCount =0;
        return new Promise((resolve, reject) => {
            promises.forEach((promise, i) => {
                setledPromiseCount++;
                promise.then((value) => {
                    outputs[i] ={
                        status: promise.status,
                        value
                    };
                    if(setledPromiseCount === promises.length) {
                        resolve(outputs)
                    }
                }).catch((error) => {
                    outputs[i] ={
                        status: promise.status,
                        reason: error
                    };
                    if(setledPromiseCount === promises.length) {
                        resolve(outputs)
                    }
                })
            });
            return outputs;
        })
    }

    race (promises) {

    }

    any (promises) {

    }
    reject (value ) {
        return new Promise((resolve, reject) => reject(value))
    }
    resolve (value ) {
        return new Promise((resolve, reject) => resolve(value))
    }

    then() {}

    catch(){}

    finally(){}
    
}
