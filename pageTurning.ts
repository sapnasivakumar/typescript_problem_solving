function pageTurning(n: number, p: number): number{
    let pageTurnRight: number = 0;
    let pageTurnLeft: number = 0;
    if( p === 1){
        return pageTurnRight;
    }else if (p === n){
        return pageTurnLeft;
    }
    if(p%2 ! == 0)
    for (let i=2; i< n-1; i++){
        if(i === p){
            ++pageTurnRight;
        } else if (p === (i+1)){   
            ++pageTurnRight;
            console.log("inside page3", pageTurnRight);
            ++i;
        }
    }
    for (let j=n-1; j>2; j--){
        if(j === p){
            ++pageTurnLeft;
        } else if (p === j-1){
            ++pageTurnLeft;
            --j;
        }
    }
    console.log("inc pointer", pageTurnRight);
    console.log("dec pointer", pageTurnLeft);
    console.log(Math.min(pageTurnLeft, pageTurnRight));

    return Math.min(pageTurnLeft, pageTurnRight);
}
export default pageTurning;