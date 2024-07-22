function climbingLeaderBoard(ranking: Array<number>, player: Array<number>): Array<number>{
    let result: Array<number> =[];
    let uniqueRanking = ranking.filter((value, index) => ranking.indexOf(value) === index);
    player.forEach((playerScore => {
       // console.log("position array", positionCalculator(uniqueRanking, playerScore));
        result = [...result, positionCalculator(uniqueRanking, playerScore)];
    }))

    console.log("result position array", result);
    return result;
}

function positionCalculator(ranking: Array<number>, playerScore: number): number{
    let position: number = 0;
    console.log("inside thepostion calculator array", playerScore);
    let equalityIndicator: boolean = false;

    let temp: number | undefined =  ranking.findIndex((score) => score <= playerScore); 
    console.log("finding temp ", temp);
    
    if(temp !== -1){
        position = temp+1;
    }else if (ranking.includes(playerScore)){
        position = temp+1;
    } else {
        position = ranking.length+1;
    }

    return position;
}
export default climbingLeaderBoard;