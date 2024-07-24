import fetch, { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks();
import multiplePromises from './multiplePromises';
beforeEach(() => {
    fetch.resetMocks();
})

describe('fetch', () => {

    test('testing promise.all', async () => {
      
    const promises = [
        () => new Promise(resolve => resolve(4)),
        () => new Promise(resolve => resolve(50)),
        () => new Promise(resolve => resolve(3))
    ];
       const result = await multiplePromises(promises);
       console.log(result);
    //    expect(result).toStrictEqual(transactionsList) ;
       //assert using expect and strictlyequal
    });

    test('testing promise.all', async () => {
      
        const promises = [
            () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
            () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
            () => new Promise(resolve => setTimeout(() => resolve(16), 100))
        ]
           const result = await multiplePromises(promises);
           console.log(result);
        //    expect(result).toStrictEqual(transactionsList) ;
           //assert using expect and strictlyequal
        });
})