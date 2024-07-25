type Fn<T> = () => Promise<T>

// function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    

// };


//  const promise = promiseAll([() => new Promise(res => res(42))])
//  promise.then(console.log); // [42]


//https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/?envType=study-plan-v2&envId=30-days-of-javascript

//Promise<Array<T>>
async function multiplePromises<T>(promises: Fn<T>[]): Promise<T> {
    let result: Array<T> =[];
//    for(const promise of promises){
//     const response = await promise();
//     console.log("printing result of promise function", response);
//     result = [...result, response];
//    }


    const arrayOfPromises = promises.map((promise) => promise());
    result = await Promise.all(arrayOfPromises);
    

    // const promiseAll = async function (promises){
    //     return await new Promise((resolve, reject) => {
    //         const array = new Array(promises.length);
    //         let waitingToCompletion = promises.length;

    //         for (let i = 0; i< promises.length; i++){
    //             promises[i]()
    //             .then((value) => {
    //                 array[i] = value;

    //                 if(waitingToCompletion === 0){
    //                     resolve(array);
    //                 } else {
    //                     --waitingToCompletion;
    //                 }
                   
    //             }).catch(reject);
    //         }
    //     })
    // }

    return result;
}

export default multiplePromises;