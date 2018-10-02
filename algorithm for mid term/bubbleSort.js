function bubbleSort(array) {

    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-1; j++) {
            if (array[j+1] < array[j]) {
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
                console.log(array);
                
            }            
        }
        
    }
} 

var list = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log('List before sorted:\t['+list+']');
bubbleSort(list);
console.log('List after sorted:\t['+list+']');