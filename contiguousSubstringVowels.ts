function contiguousSubstringVowels(s: string){
    let stringArray = s.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = false;
   
    // the for loop shld end when there is still scope to check the existence of a subarray with 3 elements
        for(let i = 0; i< stringArray.length-3; i++){
            if(vowels.includes(stringArray[i])){
                console.log("$$$$$", stringArray[i+2]);
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