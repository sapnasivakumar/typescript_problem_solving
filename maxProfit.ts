function maxProfit(prices: number[]): number{
    let tempMaxDiff: number = 0;
    for(let i = 0; i< prices.length; i++){
        for(let j=i+1; j< prices.length; j++){
          if(prices[j] - prices[i] > tempMaxDiff){
            tempMaxDiff = prices[j] - prices[i];
          } 
        }
    }
    console.log("$$$$", tempMaxDiff);

    let lowestPrice: number = prices[0];
    let lowestChanged: boolean = false;
    let diff: number = 0;
    // the for loop shld end when there is still scope to check prices[k+1] element 
    for(let k = 0; k< prices.length-1; k++){
       if((prices[k+1] - lowestPrice > 0 ) && (diff < (prices[k+1] - lowestPrice))){
            diff = prices[k+1] - lowestPrice;
       } else if(prices[k+1] - lowestPrice < 0) {
         lowestPrice = prices[k+1];
       } 
    }
    console.log("#####", diff);
    return tempMaxDiff;
}

export default maxProfit;