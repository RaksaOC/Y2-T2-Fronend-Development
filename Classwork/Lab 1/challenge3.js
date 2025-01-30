function challenge3(arr) { 
    let sum = 0; 
    let avg; 

    if (arr.length === 0) return avg = 0; 

    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i]; 
    } 

    avg = sum / arr.length; 

    return avg; 
} 

let arr1 = [85, 90, 78, 92]; 
let arr2 = [10, 20, 30]; 
let arr3 = []; 

console.log(challenge3(arr1)); 
console.log(challenge3(arr2)); 
