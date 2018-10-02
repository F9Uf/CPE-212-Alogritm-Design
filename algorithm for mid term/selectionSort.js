function selectionSort(array) {
    for (let i = 0; i < array.length-1; i++) {
        let min = i; 
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        let tem = array[min];
        array[min] = array[i];
        array[i] = tem;
        
    }
}

var list = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log('List before sorted:\t['+list+']');
selectionSort(list);
console.log('List after sorted:\t['+list+']');