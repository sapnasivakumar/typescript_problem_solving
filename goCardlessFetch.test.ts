import fetch, { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks();
import fetchMerchantTransactionData from "./goCardlessFetch";
beforeEach(() => {
    fetch.resetMocks();
})

describe('fetch', () => {

    test('testing merchant transaction fetch', async () => {
        // define a mock response
        const merchantsMock = ['1'];
        const transactionDataMock = { 
            "id": "M28A9",
            "iban": "GB2756386333762976",
            "discount": {
                "minimum_transaction_count": 49,
                "fees_discount": 7
            },
            "transactions": [
                {
                    "amount": 54869,
                    "fee": 290
                }
            ]
         };
         const transactionsList = [
            {
              iban: 'GB2756386333762976',
              merchantId: 'M28A9',
              amount: 548.69,
              fees: -2.9,
              net: 545.7900000000001
            }
          ];

        fetch
        .once(JSON.stringify(merchantsMock))
        .once(JSON.stringify(transactionDataMock));

       const result = await fetchMerchantTransactionData();
       console.log(result);
       expect(result).toStrictEqual(transactionsList) ;
       //assert using expect and strictlyequal
    });
})