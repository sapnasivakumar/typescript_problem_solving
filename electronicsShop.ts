function electronicsShop(b: number, k: Array<number>, u: Array<number>): number{
    let result: number = -1;
    let sum: number = 0;
    for(let i =0; i< k.length; i++){
        for(let j=0; j< u.length; j++){
            sum = k[i]+u[j];
            if(sum >result && sum<=b){
                result = sum;
            }
        }
    }
    console.log("result", result);
    return result;
}

export default electronicsShop;
//https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true