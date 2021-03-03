const reduce = (array, conditon, value) => {
    if(array.length == 0 && !value)
    return undefined;
    if(!value)
    return array.reduce(conditon);
    return array.reduce(conditon,(value));
}
module.exports = reduce;