function challenge6(vote) { 
    let numA = 0; 
    let numB = 0; 
    let numC = 0; 

    for (let i = 0; i < vote.length; i++) { 
        if (vote[i] === 'A') numA++; 
        else if (vote[i] === 'B') numB++; 
        else if (vote[i] === 'C') numC++; 
    }     

    let max = numB; 
    if (numA > max) max = numA; 
    if (numC > max) max = numC; 

    let string = ""; 

    if (vote.length === 0) string = "There is no vote yet";  
    else if (max === numA && max === numB && max === numC) string = "A, B, and C are all winners"; 
    else if (max === numA && max === numB) string = "A and B are both winners"; 
    else if (max === numB && max === numC) string = "B and C are both winners"; 
    else if (max === numA && max === numC) string = "A and C are both winners"; 
    else if (max === numA) string = "A is the winner"; 
    else if (max === numB) string = "B is the winner"; 
    else if (max === numC) string = "C is the winner";  

    return string; 
} 

let votes1 = ['A', 'B', 'A', 'C', 'A']; 
let votes2 = ['A', 'B', 'B', 'C', 'A']; 
let votes3 = []; 

console.log(challenge6(votes1)); // A is the winner 
console.log(challenge6(votes2)); // A and B are both winners 
console.log(challenge6(votes3)); // There is no vote yet  