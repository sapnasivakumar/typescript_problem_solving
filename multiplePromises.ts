type Fn<T> = () => Promise<T>

// function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    

// };


//  const promise = promiseAll([() => new Promise(res => res(42))])
//  promise.then(console.log); // [42]


//https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/?envType=study-plan-v2&envId=30-days-of-javascript


async function multiplePromises<T>(promises: Fn<T>[]): Promise<Array<T>> {
    let result: Array<T> =[];
//    for(const promise of promises){
//     const response = await promise();
//     console.log("printing result of promise function", response);
//     result = [...result, response];
//    }


    // const arrayOfPromises = promises.map((promise) => promise());
    // result = await Promise.all(arrayOfPromises);
    

    return result;
}

export default multiplePromises;