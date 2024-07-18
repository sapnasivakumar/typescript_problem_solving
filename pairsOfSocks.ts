function socksWithoutPair(arr: Array<number>): number{
let result: number = 0;
type sock = {
  [key: string]: number;
};

let socksObject: sock = {};

arr.forEach(sock => {
    if(socksObject.hasOwnProperty(sock)){
        ++socksObject[sock];
    } else {
        socksObject[sock] = 1;
    }
})
console.log(socksObject);
const sockQuantities = Object.values(socksObject);
console.log(sockQuantities);
// for (const [key, value] of Object.entries(socksObject)) {
//     console.log(`${key}: ${value}`);
//     console.log(value);
//     let temp: number = value;
//     if( temp%2 !== 0){
//         ++result;
//     }
//   }
  Object.entries(socksObject).forEach((entry) => {
    //console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
    if(entry[1] %2 !==0){
        ++result;
    }
  });
  let valuesArray: Array<number> = Object.values(socksObject);
  valuesArray.forEach((value) => {
    if(value%2 !== 0){
      ++result;
    }
  })
  console.log(result);
  
return result
}
export default socksWithoutPair;