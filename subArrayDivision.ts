function subArrayDivision(arr: Array<number>, a: number, k: number): number{
    let temp = 0;
    let tempSum = 0;
    for(let i = 0; i <= (arr.length-a); i++){
        tempSum = arr.slice(i, i+a).reduce((acc, curr) => acc+curr, 0);
        console.log("tempSum", tempSum);
         if(tempSum === k){
            ++temp;
         }
    }
    console.log(temp);
    return temp;
}

export default subArrayDivision;