function insertionSort(array) {
    // var array = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
    for (let index = 1; index < array.length ; index++) {
        const element = array[index];
        let j = index - 1;

        while ( (j >= 0) && (array[j] > element) ) {
            array[j+1] = array[j];
            j--;
        }
        
        array[j+1] = element;
        console.log(array);
        
        
    }    
}

var list = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log('List before sorted:\t['+list+']');
insertionSort(list);
console.log('List after sorted:\t['+list+']');

