import gameWinner from "./mock23July";

describe('testing gameWinner function', () => {
    // test('should return a winner', () => {
    //     expect(gameWinner([[0,0],[1,1],[1,0],[0,2]])).toEqual(true);
    // });
    test('should return a winner', () => {
        expect(gameWinner([[0,1],[0,2],[1,2],[0,0]])).toEqual(false);
    });
})