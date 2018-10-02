function binarySearch(array, key) {
    var left = 0;
    var right = array.length - 1;

    while (left <= right) {
        let m = (left+right)/2;

        if (key == array[m]) return m;
        else if (key < array[m]) right = m-1;
        else left = m+1;
    }

    return -1;
}

var list = [2,3,4,5,15,19,26,27,36,38,44,46,47,48,50];
var key = 0;
var index = binarySearch(list, key);
console.log('Search '+key+' by binary search found in '+index+' and it\'s '+list[index]);
