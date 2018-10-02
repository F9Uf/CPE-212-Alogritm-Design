function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function quickSelect2(arr, k) {

    function lomuto(lo, hi) {
        var pivot = arr[lo];
        var s = lo;
        for(var i = lo + 1; i<=hi ; i++) {
            if (arr[i] < pivot) {
                s++ ;
                swap(arr, s, i);
            }
        }
        swap(arr,lo, s);
        return s;
    }

    function select(lo, hi, k) {
        var s = lomuto(lo, hi);
        if (s==k) {
            return arr[k];
        } else if (s>k) {
            return select(lo, s-1, k);
        } else if (s<k) {
            return select(s+1, hi, k);
        }
    }

    return select(0, arr.length-1, k);
}

function quickSelect1(arr, k) {
    function hoare(lo, hi) {
        const p = arr[lo]

        let i = lo - 1
        let j = hi + 1

        while (true) {
            do i++
            while (arr[i] < p)

            do j--
            while (arr[j] > p)

            if (i >= j) return j

            swap(arr, i, j)
        }
    }

    function select(lo, hi, k) {

        // if (lo == hi) return arr[lo];

        var s = hoare(lo, hi);
        
        if (s == k) {
            return arr[k];
        } else if (s > k) {
            return select(lo, s, k);
        } else if (s < k) {
            return select(s+1, hi, k);
        }
    }

    return select(0, arr.length - 1, k)
}

function main () {
    var arrayA = [4, 1, 10, 8, 7, 12, 9, 2, 15];
    var arrayB = [4, 1, 10, 8, 7, 12, 9, 2, 15];
    let key = 7;

    

    //    lomuto partition  //
    console.time('lomuto-partition');
    let y = quickSelect2(arrayB, key);
    console.timeEnd('lomuto-partition');

    //    hoare partition   //
    console.time('hoare-partition');       
    let x = quickSelect1(arrayA, key);
    console.timeEnd('hoare-partition');
    
}

main();



