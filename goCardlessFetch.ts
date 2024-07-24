type TransactionData = {
    iban: string,
    merchantId: string,
    amount: number,
    fees: number,
    net: number
}
type MerchantData = {
    id: string,
    iban: string,
    discount: Discount,
    transactions: Array<Transaction>
}

type Discount = {
    minimum_transaction_count: number,
    fees_discount: number
}
type Transaction = {
    amount: number,
    fee: number
}
async function fetchMerchantTransactionData(): Promise<TransactionData[]>{
    const merchantIdsResponse = await fetch('https://simpledebit.gocardless.io/merchants');
    const merchantIds: Array<number> = await merchantIdsResponse.json();
    //console.log("merchant ids", merchantIds);
    let transactionData: Array<TransactionData> =[];
    
    for(const merchantId of merchantIds) {       
        const response = await fetch(`https://simpledebit.gocardless.io/merchants/${merchantId}`);
        const merchantData: MerchantData = await response.json();
        const {transactions, discount} = merchantData;
       //console.log('response', transactions.length);
       
   
       const accumulatedAmount: number = transactions.reduce((acc, curr) => acc+ curr.amount, 0)/100;
       //console.log("accumulated amount", accumulatedAmount);
       const accumulatedFees: number = transactions.reduce((acc, curr) => acc+ curr.fee, 0)/100;
       //console.log("accumulated fee", accumulatedFees);
       let discountedFees: number = 0;
       if(transactions.length >= discount.minimum_transaction_count){
           discountedFees = (accumulatedFees * discount.fees_discount)/100;
       } 
   
       const net: number = accumulatedAmount - (accumulatedFees - discountedFees);
   
       const result: TransactionData = {    
           iban: merchantData.iban,
           merchantId: merchantData.id,
           amount: accumulatedAmount,
           fees: -1 * (accumulatedFees - discountedFees),
           net: net
   
       }
       //console.log("result", result);
       //console.log("transaction data", transactionData);
       //console.log("processing", merchantId);
       transactionData = [...transactionData, result];
    }
    //console.log("transaction data array", transactionData);
    return transactionData;
}

export default fetchMerchantTransactionData;