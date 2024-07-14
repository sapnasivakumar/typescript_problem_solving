function stonePile(arr: Array<number>): Array<number>{
    let player: number;
    while(arr.length >1){
        arr = player1(arr);
        player = 1;
      if(arr.length >= 2){
        arr  = player2(arr);
        player = 0;
      }  
    }
    console.log("final", [player, ...arr]);
    return [player, ...arr];
}
function player1(arr: Array<number>): Array<number>{
    let elementToRotate = arr.shift();
    arr = [...arr, elementToRotate];
    arr.shift();
    console.log("Player1", arr);
    return arr;

}
function player2(arr: Array<number>): Array<number> {
    let elementToRotate1 = arr.shift();
    arr = [...arr, elementToRotate1];
    let elementToRotate2 = arr.shift();
    arr = [...arr, elementToRotate2];
    arr.shift();
    console.log('player2', arr);
    return arr;
}
export default stonePile;