const head = require('./head');
describe('Head', () => {
     it('Should return 1 for [1, 2, 3]', () => {
         expect(head([1, 2, 3])).toEqual(1);
     });
     it('Should return null for []', () => {
         expect(head([])).toEqual(null);
     });
     it('Should return 1 for [1]', () => {
        expect(head([1])).toEqual(1);
    });
})