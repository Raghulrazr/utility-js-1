const min = (array) => {
    return minOfArray(array,array.length-1);
}
const minOfArray = (array, index) => {
    if(index == 0)
    return array[0];
    else
    return Math.min(minOfArray(array, index-1), array[index]);
}
module.exports = min;