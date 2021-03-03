const max =  require('./max');
describe('Max', () => {
    it('Should return 4 for [1,2,3,4]', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });
});