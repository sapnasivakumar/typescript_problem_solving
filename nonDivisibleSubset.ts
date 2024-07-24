function nonDivisibleSubset(s: Array<number>, k: number): number{
    let result: Array<number> = [];
    type subset = {
        [key: number]: Array<number>;
      };
      let subsetObject: subset = {};
    for(let i =0; i< s.length; i++){
        for(let j =i+1; j<s.length; j++){
            if(subsetObject.hasOwnProperty(s[i]+s[j])){
                subsetObject[s[i]+s[j]]= [...subsetObject[s[i]+s[j]], s[i], s[j]];
            } else {
                subsetObject[s[i]+s[j]] = [s[i], s[j]];
            }
        }
    }
    console.log("subset object", subsetObject);
    let keys: Array<string> = Object.keys(subsetObject);
    console.log("keys", keys);
    let numberKeys: Array<number> = keys.map(Number);
    console.log("numberKeys", numberKeys);
    let filteredKeys: Array<number> = numberKeys.filter((key) => key%k !== 0);
    console.log("filteredkeys", filteredKeys);
    type SubsetArrayType = Array<number>;
    let subsetArray: Array<SubsetArrayType> = [];
    filteredKeys.forEach((key) => {
        subsetArray = [...subsetArray, subsetObject[key]];
        //console.log(subsetObject[key]);
    })
    console.log("^^^^", subsetArray);
    let resultArray: Array<number> = subsetArray.flat();
    console.log("####", resultArray);
    console.log("subsetArray###", resultArray.filter((val, index)=> resultArray.indexOf(val) === index));



    
    return resultArray.filter((val, index)=> resultArray.indexOf(val) === index).length;

}

export default nonDivisibleSubset;