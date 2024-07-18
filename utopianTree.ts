function utopianTree(n: number): number{
    let height = 1;
    if(n === 0){
        return height;
    }
    for(let i=1; i<=n; i++){
        if(i%2 !== 0){
            height = height *2;
        } else {
            height = height+1;
        }
    }
    console.log("$$$", height);
    return height;
}

export default utopianTree;

//https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true