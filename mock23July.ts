const sampleData = {
    "players": [
      {
        "name": "John",
        "squares": [[0,0],[1,1],[1,0],[2,2]]
      },
      {
        "name": "David",
        "squares": [[0,1],[0,2],[1,2]]
      }
    ]
  };

function gameWinner(scoreBoard: number[][]): boolean{
    let winner: boolean = false;
    const diagonal1: number[][] = [[0,0],[1,1],[2,2]]
    const diagonal2: number[][] = [[0,2],[1,1],[2,0]]
    let diagonal1Count: number = 0;
    let diagonal2Count: number = 0;
    scoreBoard.forEach((score)=> {
        // console.log(score);
        if (diagonal1.find((s) => s[0] === score[0] && s[1] === score[1])){
            // console.log("inside the diagonal check");
            ++diagonal1Count;
        }
        if(diagonal1Count === 3){
            winner = true;
            console.log("diagonal winner", diagonal1Count);
            return winner;
        }

        if (diagonal2.find((s) => s[0] === score[0] && s[1] === score[1])){
            // console.log("inside the diagonal check");
            ++diagonal2Count;
        }
        if(diagonal2Count === 3){
            winner = true;
            console.log("diagonal winner", diagonal2Count);
            return winner;
        }  

    })

    let temp0 = scoreBoard[0][0];
    let temp1 = scoreBoard[0][1];
    
    scoreBoard.forEach((score) => {
        let row = 0;
        let col = 0;
       if(score[0] === temp0){
        console.log("increment row");
        ++row;
        temp0 = score[0];
       }
       if(score[1] === temp1){
        console.log("increment col");
        ++col;
        temp1 = score[1];
       }
       console.log("number of rows", row);
       console.log("number of col", col);
       if(row === 3){
        console.log("three of same row");
        winner = true;
        console.log("winner 3 of same row", winner);
       }
       if(col === 3){
        console.log("3 of same col");
        winner = true;
        console.log("winner 3 of same col", winner);
       }

    })
    return winner;

}

export default gameWinner;