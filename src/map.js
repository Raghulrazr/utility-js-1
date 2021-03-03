const map = (array, funct) => {
    if(array.length == 0)
    return [];
    else
    return array.map(funct);
}

module.exports = map;