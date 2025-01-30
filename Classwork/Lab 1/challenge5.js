function challenge5(str) { 
    let num = 1; 

    for (let i = 0; i < str.length; i++) { 
        if (str[i] === ' ') { 
            num++; 
        } 
    } 

    return num; 
} 

let str1 = "hello world"; 
let str2 = "this is the best day"; 
let str3 = "a bb ccc dddddddd e"; 

console.log(challenge5(str1)); 
console.log(challenge5(str2)); 
console.log(challenge5(str3)); 
