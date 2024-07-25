import groupBy from "./groupBy";
type ObjectInput = {
    id: string
}

describe('testing groupBy file', () => {

  test('shld return an object when input is an array of objects', () => {
    expect(groupBy<ObjectInput>([
        {"id":"1"},
        {"id":"1"},
        {"id":"2"}
      ],function (item) { 
        return item.id; 
      })).toEqual({ 
        "1": [{"id": "1"}, {"id": "1"}],   
        "2": [{"id": "2"}] 
      });
  });
  test('shld return an object ', () => {
    expect(groupBy<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (n) { 
        return String(n > 5);
      })).toEqual({
        "true": [6, 7, 8, 9, 10],
        "false": [1, 2, 3, 4, 5]
      });
  });
  
});