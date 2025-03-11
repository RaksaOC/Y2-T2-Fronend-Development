// const question = document.querySelector("#ques");
// const correct = document.querySelector("#correct");
//
// const wrong1 = document.querySelector("#wrong1");
// const wrong2 = document.querySelector("#wrong2");
// const wrong3 = document.querySelector("#wrong3");
//
// const back = document.querySelector("#back");
// const next = document.querySelector("#next");
// const finish = document.querySelector("#finish");
//
// // {
// //     image: "./images/quiz.png",
// //     name: "Famous Movie Quotes Quiz",
// //     questions: [
// //       {
// //         question: "Who said 'May the Force be with you'?",
// //         choices: ["Han Solo", "Luke Skywalker", "Obi-Wan Kenobi", "Yoda"],
// //         correctAnswer: "Obi-Wan Kenobi",
// //       },
// //       {
// //         question: "Who said 'I’m gonna make him an offer he can’t refuse'?",
// //         choices: [
// //           "Michael Corleone",
// //           "Vito Corleone",
// //           "Tom Hagen",
// //           "Johnny Fontane",
// //         ],
// //         correctAnswer: "Vito Corleone",
// //       },
// //       {
// //         question: "Who said 'There’s no place like home'?",
// //         choices: ["Dorothy", "Glinda", "The Wicked Witch", "The Scarecrow"],
// //         correctAnswer: "Dorothy",
// //       },
// //       {
// //         question: "Who said 'I’ll be back'?",
// //         choices: ["RoboCop", "The Terminator", "John Wick", "Rocky"],
// //         correctAnswer: "The Terminator",
// //       },
// //       {
// //         question: "Who said 'You can’t handle the truth!'?",
// //         choices: [
// //           "Jack Nicholson",
// //           "Tom Cruise",
// //           "Nicholas Cage",
// //           "Morgan Freeman",
// //         ],
// //         correctAnswer: "Jack Nicholson",
// //       },
// //       {
// //         question: "Who said 'I feel the need – the need for speed'?",
// //         choices: ["Tom Cruise", "Val Kilmer", "Brad Pitt", "John Travolta"],
// //         correctAnswer: "Tom Cruise",
// //       },
// //       {
// //         question: "Who said 'Life is like a box of chocolates'?",
// //         choices: [
// //           "Tom Hanks",
// //           "Morgan Freeman",
// //           "Danny DeVito",
// //           "Matthew McConaughey",
// //         ],
// //         correctAnswer: "Tom Hanks",
// //       },
// //       {
// //         question: "Who said 'I see dead people'?",
// //         choices: [
// //           "Bruce Willis",
// //           "M. Night Shyamalan",
// //           "Hayley Joel Osment",
// //           "Will Smith",
// //         ],
// //         correctAnswer: "Hayley Joel Osment",
// //       },
// //       {
// //         question: "Who said 'Why so serious?'?",
// //         choices: ["Joker", "Batman", "Harley Quinn", "Two-Face"],
// //         correctAnswer: "Joker",
// //       },
// //       {
// //         question: "Who said 'You had me at hello'?",
// //         choices: [
// //           "Julia Roberts",
// //           "Tom Hanks",
// //           "Dustin Hoffman",
// //           "Renée Zellweger",
// //         ],
// //         correctAnswer: "Renée Zellweger",
// //       },
// //       {
// //         question: "Who said 'There’s no place like home'?",
// //         choices: ["Glinda", "The Wicked Witch", "The Tin Man", "Dorothy"],
// //         correctAnswer: "Dorothy",
// //       },
// //       {
// //         question: "Who said 'I am the one who knocks'?",
// //         choices: [
// //           "Walter White",
// //           "Jesse Pinkman",
// //           "Hank Schrader",
// //           "Saul Goodman",
// //         ],
// //         correctAnswer: "Walter White",
// //       },
// //       {
// //         question: "Who said 'You talkin’ to me?'?",
// //         choices: ["Al Pacino", "Robert De Niro", "Joe Pesci", "Jack Nicholson"],
// //         correctAnswer: "Robert De Niro",
// //       },
// //       {
// //         question: "Who said 'To infinity and beyond!'?",
// //         choices: ["Buzz Lightyear", "Woody", "Mr. Potato Head", "Rex"],
// //         correctAnswer: "Buzz Lightyear",
// //       },
// //       {
// //         question: "Who said 'Here’s looking at you, kid'?",
// //         choices: [
// //           "Clark Gable",
// //           "Humphrey Bogart",
// //           "Marlon Brando",
// //           "Gary Cooper",
// //         ],
// //         correctAnswer: "Humphrey Bogart",
// //       },
// //     ],
// //   },
//
// let quiz = {
//   name: "",
//   image: "",
//   questions: [],
// };
//
// let allQuestions = [];
//
// let newQuestion = {
//   question: "",
//   choices: [],
//   correctAnswer: "",
// };
//
// let ques;
//
// // newQuestion.question = question.value;
// // newQuestion.question = correct.value;
// // newQuestion.choices.push(wrong1.value);
// // newQuestion.choices.push(wrong2.value);
// // newQuestion.choices.push(wrong3.value);
//
// question.addEventListener("change", function () {
//   newQuestion.question = question.value;
// });
//
// correct.addEventListener("change", function () {
//   newQuestion.choices.push(correct.value);
//   newQuestion.correctAnswer = correct.value;
// });
//
// wrong1.addEventListener("change", function () {
//   newQuestion.choices.push(wrong1.value);
// });
//
// wrong2.addEventListener("change", function () {
//   newQuestion.choices.push(wrong2.value);
// });
//
// wrong3.addEventListener("change", function () {
//   newQuestion.choices.push(wrong3.value);
// });
//
// next.addEventListener("click", function () {
//   const quesHead = document.querySelector("#question-head");
//   const allInputs = document.querySelectorAll("input");
//   let isValid = checkEmptyInput(allInputs);
//   if (!isValid) {
//     alert("Please fill in all the inputs");
//     allInputs.forEach((element) => {
//       element.value = "";
//     });
//   } else {
//     allQuestions.push(newQuestion);
//     quesHead.textContent = `Question ${allQuestions.length + 1}`;
//     console.log(newQuestion);
//     allInputs.forEach((element) => {
//       element.value = "";
//     });
//   }
// });
//
// function checkEmptyInput(allInputs) {
//   for (let element of allInputs) {
//     if (element.value.trim() === "") {
//       return false;
//     }
//   }
//   return true;
// }
//
// finish.addEventListener("click", function () {
//   allQuestions.push(newQuestion);
//   // console.log(newQuestion);
//   const allInputs = document.querySelectorAll("input");
//   let isValid = checkEmptyInput(allInputs);
//   if (!isValid) {
//     allInputs.forEach((element) => {
//       element.value = "";
//     });
//   }
//   else if (!checkQuizLength(allQuestions)) {
//     alert("Please make a quiz that have more than 5 questions");
//     allInputs.forEach((element) => {
//       element.value = "";
//     });
//   } else {
//     quiz.questions = allQuestions;
//     finishMaking();
//   }
//   console.log(quiz);
// });
//
// function finishMaking() {
//   const main = document.querySelector("main");
//   const btns = document.querySelector(".page-nav");
//   btns.innerHTML = "";
//   main.innerHTML = `<h1>Quiz made successfully!😃 </h1>
//                     <a href = "index.html">Go back</a>
//     `;
// }
//
// function checkQuizLength(questions) {
//   if (questions.length < 5) return false;
//   return true;
// }
