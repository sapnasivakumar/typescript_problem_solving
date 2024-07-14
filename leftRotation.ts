function leftRotation(arr: Array<number>, n:number): Array<number>{
let result: Array<number>|undefined = [];
while(n>0){
    let shiftedElement: number = arr.shift();
    
    arr = [...arr, shiftedElement];
    console.log("$$$$", arr); 
    --n;
}
console.log("final result", arr);
return arr;
}

export default leftRotation;