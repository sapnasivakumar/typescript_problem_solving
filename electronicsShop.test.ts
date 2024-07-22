import  electronicsShop from './electronicsShop';

describe('testing electronicsShop file', () => {
  test('shld return a max price under a given budget to purchase a keyborad and USB drive', () => {
    expect(electronicsShop(60, [40,50,60], [5,8,12])).toEqual(58);
  });
  test('shld return a max price under a given budget to purchase a keyborad and USB drive', () => {
    expect(electronicsShop(10, [3,1], [5, 2, 8])).toEqual(9);
  });
  
});