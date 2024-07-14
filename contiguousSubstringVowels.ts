function contiguousSubstringVowels(s: string){
    let stringArray = s.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = false;
   for(let i = 0; i< stringArray.length; i++){
        if(vowels.includes(stringArray[i])){
            if(vowels.includes(stringArray[i+1]) && vowels.includes(stringArray[i+2])){
                result = true;
                console.log("result true", stringArray[i], stringArray[i+1], stringArray[i+2]);
                return result;
            }
        }
   }
       return result;


}

export default contiguousSubstringVowels;