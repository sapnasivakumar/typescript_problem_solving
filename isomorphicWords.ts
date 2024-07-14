function isomorphicWords(a: string, b: string): boolean {
    let wordAObject = {};
    let wordBObject = {};

    a.split('').forEach(character => {
        if (wordAObject.hasOwnProperty(character)){
            ++wordAObject[character];
        } else {
            wordAObject[character] = 1;
        }
    });
    b.split('').forEach(character => {
        if (wordBObject.hasOwnProperty(character)){
            ++wordBObject[character];
        } else {
            wordBObject[character] = 1;
        }
    });
    
    let arrayOfStringACharacters: Array<number> = Object.values(wordAObject);
    
    const totalCharactersInA = arrayOfStringACharacters.reduce((acc: number, curr: number) => {
        return acc+curr;
    }, 0);
    let arrayOfStringBCharacters: Array<number> = Object.values(wordBObject);
    
    const totalCharactersInB = arrayOfStringBCharacters.reduce((acc: number, curr: number) => {
        return acc+curr;
    }, 0);

    console.log("#####", arrayOfStringACharacters);
    console.log("$$$$$$", arrayOfStringBCharacters);
    if(arrayOfStringACharacters.length === arrayOfStringBCharacters.length){
        for(let i =0; i< arrayOfStringACharacters.length; i++){
            if(arrayOfStringACharacters[i] !== arrayOfStringBCharacters[i]){
                return false;
            }
        }
        return true;
    }
    return false;
}

export default isomorphicWords;