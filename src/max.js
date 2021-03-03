const max = (array) => {
    return maxOfArray(array,array.length-1);
}
const maxOfArray = (array, index) => {
    if(index == 0)
    return array[0];
    else
    return Math.max(maxOfArray(array, index-1), array[index]);

}
module.exports = max;