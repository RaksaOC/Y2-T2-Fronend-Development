function challenge4(str, ch) { 
    let num = 0; 

    for (let i = 0; i < str.length; i++) { 
        if (str[i] === ch) { 
            num++; 
        } 
    } 

    return num; 
} 

let str1 = "hello world"; 
let ch1 = 'o'; 

let str2 = "aaa bbb a"; 
let ch2 = 'a'; 

let str3 = "abc"; 
let ch3 = 'd'; 

console.log(challenge4(str1, ch1)); 
console.log(challenge4(str2, ch2)); 
console.log(challenge4(str3, ch3)); 

