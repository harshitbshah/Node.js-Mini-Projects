var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject('Arguments must be numbers');
            }
        },1500)
    });
};

asyncAdd(5, '7').then((result) => {
    console.log('Result: ',result);
    return asyncAdd(result,33);
}).then((res) => {
    console.log('Should be 45, ', res);
}).catch((errMsg) => {
    console.log(errMsg);
});

// var somePromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject('Unable to fulfil promise');
//         resolve('Hey it worked!');
//     },2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errMessage) => {
//     console.log('Error Message: ',errMessage);
// })
