const min =  require('./min');
describe('min', () => {
    it('Should return 1 for [1,2,3,4]', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });
});