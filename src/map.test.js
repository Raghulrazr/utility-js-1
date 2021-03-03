const map = require('./map');
const cube = require('./cube');
const identity = require('./identity');

describe('Map', () => {

     it('Should return [1,8,27] for [1, 2, 3], cube', () => {
         expect(map([1, 2, 3],cube)).toEqual([1,8,27]);
     });

     it('Should return [] for [], cube', () => {
        expect(map([],cube)).toEqual([]);
     });
     it('Should return [] for [], cube', () => {
      expect(map([],identity)).toEqual([]);
     });
     it('Should return [1,8,27] for [1, 2, 3], identity', () => {
        expect(map([1, 2, 3],identity)).toEqual([1, 2, 3]);
     });
     it('Should return [11] for [a{x : 10}],someObject => someObject.x + 1', () => {
        expect(map([{x : 10}],someObject => someObject.x + 1)).toEqual([11]);
     });
})