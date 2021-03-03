const reduce = require('./reduce');
describe('reduce', () => {
    it('Should return undefined for [],(x,y)=>x+y', () => {
        expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
    });
    it('Should return 10 for [],(x,y)=>x+y,10', () => {
        expect(reduce([],(x,y)=>x+y,10)).toEqual(10);
    });
    it('Should return abc for [a,b,c],(x,y)=>x+y', () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
    });
    it('Should return zabc for [a,b,c],(x,y)=>x+y,z', () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });
});