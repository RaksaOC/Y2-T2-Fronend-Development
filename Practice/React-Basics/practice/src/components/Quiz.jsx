import { createElement } from "react";

const quizzes = [
    {
        question: "What is the first letter in the alphabet?",
        choices: ["C", "B", "Z", "A"]
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"]
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"]
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        choices: ["Oxygen", "Osmium", "Ozone", "Opium"]
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue Whale", "Shark", "Giraffe"]
    },
    {
        question: "In which year did World War II end?",
        choices: ["1945", "1939", "1918", "1960"]
    },
    {
        question: "What is the square root of 64?",
        choices: ["6", "8", "10", "12"]
    },
    {
        question: "What is the boiling point of water?",
        choices: ["90°C", "100°C", "110°C", "120°C"]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "George Orwell"]
    },
    {
        question: "What is the largest continent?",
        choices: ["Africa", "Asia", "Europe", "North America"]
    },
    {
        question: "Which gas do plants absorb from the air?",
        choices: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"]
    },
    {
        question: "Which ocean is the largest?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"]
    },
    {
        question: "What is the currency of Japan?",
        choices: ["Yuan", "Won", "Yen", "Ringgit"]
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Ag", "Fe", "Au", "Pb"]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        choices: ["China", "South Korea", "Japan", "Vietnam"]
    },
    {
        question: "What is the main ingredient in guacamole?",
        choices: ["Tomato", "Avocado", "Onion", "Lemon"]
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        choices: ["Australia", "New Zealand", "USA", "Canada"]
    },
    {
        question: "What is the longest river in the world?",
        choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"]
    }
];

// Manually rendering choices without using .map()
function displayChoices(questionNum) {
    const quiz = quizzes[questionNum];
    const div = createElement('div');
    
    for (let index = 0; index < quiz.choices.length; index++) {
        div.appendChild(createElement('p', null, quiz.choices[index]));
    }
    
    return div;
}

function Quiz(props) {
    return (
        <>
            <h1>Question {props.questionNum}</h1>
            <p>{quizzes[props.questionNum].question}</p>
            <div>{displayChoices(props.questionNum)}</div>
        </>
    );
}

export default Quiz;
