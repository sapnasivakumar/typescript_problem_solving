function appleAndOrange (s: number, t: number, a: number, o: number, apples: Array<number>, oranges: Array<number>): Array<number>{
    let resultArray: Array<number> =[];
    let applesDistance = apples.map((apple) => a + apple);
    let orangesDistance = oranges.map((orange) => o + orange);
    
    let appleCount: number = 0;
    let orangeCount: number = 0;

    appleCount = applesDistance.reduce((acc, curr) => (curr >= s && curr <=t)? ++acc : acc, 0);
    orangeCount = orangesDistance.reduce((acc, curr) => (curr >= s && curr <=t)? ++acc : acc, 0);

    console.log( appleCount, orangeCount)
    resultArray = [...resultArray, appleCount, orangeCount]
    
    return resultArray;

}

export default appleAndOrange;

//https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true