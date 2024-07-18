function runningComparison(A: Array<number>, B: Array<number>): number{
    let result:number = 0;

    for(let i =0; i< A.length; i++){
        if(B[i] <= A[i]*2){
            if(A[i] <= B[i]*2){
                ++result;
            }
        }
    }
    console.log("%%%%%", result);
    return result;
}

export default runningComparison;