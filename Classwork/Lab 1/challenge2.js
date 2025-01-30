function challenge2(arr) { 
    let j = arr.length - 1; 
    for (let i = 0; i < j; i++) { 
        let temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
        j--; 
    } 
    return arr; 
}

let arr1 = [14, 15, 16, 20]; 
let arr2 = [5, 4, 3, 2, 1]; 
let arr3 = []; 

console.log(challenge2(arr1)); 
console.log(challenge2(arr2)); 
console.log(challenge2(arr3));
