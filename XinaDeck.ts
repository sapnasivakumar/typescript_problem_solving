type Deck = {
    card: number;
    value: number;
  };
function hasGroupsSizeX(deck: number[]): boolean {
      let deckObject = {};
      deck.forEach(card => {
          if(deckObject.hasOwnProperty(card)){
            ++deckObject[card]
          }else {
            deckObject[card] = 1;
          }
      });
      console.log("****", deckObject);
      const values: number[] = Object.values(deckObject);
      console.log("###", values);
      if(values.length > 1){
        const result: boolean = values.every((value) => value === deckObject[deck[0]])
        return result;
      } else {
        return false;
      }
     
  };

  export default hasGroupsSizeX;

  