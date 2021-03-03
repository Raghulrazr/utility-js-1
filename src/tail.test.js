const tail = require('./tail');

describe('Tail', () => {
    it('should return [2,3,4]', () => {
        expect(tail([1,2,3,4])).toEqual([2,3,4]);
    });
    it('should return []', () => {
        expect(tail([])).toEqual([]);
    });
    it('should return [1] for [1]', () => {
        expect(tail([1])).toEqual([]);
    });
});
