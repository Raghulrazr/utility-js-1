const filteruppercase = require('./filteruppercase');
const filter = require('./filter');
describe('Filter', () => {
    it('Should return [] for [], x => true', () => {
        expect(filter([],x => true)).toEqual([]);
    });
    it('Should return [1,2,3] for [1,2,3],x => true', () => {
        expect(filter([1,2,3],x => true)).toEqual([1,2,3]);
    });
    it('Should return [] for [a,B,c,D],filteruppercase', () => {
        expect(filter([1,2,3],x => false)).toEqual([]);
    });
    it('Should return [2,3] for [1,2,3],x => x > 1', () => {
        expect(filter([1,2,3],x => x > 1)).toEqual([2,3]);
    });
    it('Should return [B, D] for [a,B,c,D],filteruppercase', () => {
        expect(filter(['a','B','c','D'],filteruppercase)).toEqual(['B','D']);
    });

});