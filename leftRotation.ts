function leftRotation(arr: Array<number>, n:number): Array<number>{
let result: Array<number>|undefined = [];
while(n>0 && arr.length >0){
    let shiftedElement: number = arr.shift();
    result = [...arr, shiftedElement];
}
console.log("$$$$", result);
return result;
}

export default leftRotation;