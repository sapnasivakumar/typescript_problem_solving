
function groupBy<T>(input: Array<T>, fn: (item: T) => string): Record<string, T[]>  {
    let result: Record<string, T[]> = {};
    let keyToAdd;

    for(let i = 0; i< input.length; i++){
        keyToAdd = fn(input[i]);
        let value = input[i];
        if(result.hasOwnProperty(keyToAdd)){
            result[keyToAdd] = [...result[keyToAdd], value] ;
        }else {
            result[keyToAdd] = [value];
        }
    }
    return result;
}
export default groupBy;