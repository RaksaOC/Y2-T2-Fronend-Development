//
//  Bind buttons click event to actions
//

function bindEvents() {
  const firstNum = document.querySelector("#firstnumber");
  const lastNum = document.querySelector("#lastnumber");
  const minusBtn = document.querySelector("#minusButton");
  minusBtn.setAttribute("type", "button");
  const divideBtn = document.querySelector("#divideButton");
  divideBtn.setAttribute("type", "button");
  const avgBtn = document.querySelector("#averageButton");
  avgBtn.setAttribute("type", "button");

  minusBtn.addEventListener("click", function () {
    let a = parseInt(getFirstNumber(firstNum));
    let b = parseInt(getLastNumber(lastNum));
    onMinus(a, b);
  });

  divideBtn.addEventListener("click", function () {
    let a = parseInt(getFirstNumber(firstNum));
    let b = parseInt(getLastNumber(lastNum));
    onDivide(a, b);
  });

  avgBtn.addEventListener("click", function () {
    let a = parseInt(getFirstNumber(firstNum));
    let b = parseInt(getLastNumber(lastNum));
    onAverage(a, b);
  });
}

//
//  Get first number from inputs
//
function getFirstNumber(input) {
  return input.value;
}

//
//  Get last number from inputs
//
function getLastNumber(input) {
  return input.value;
}

//
//  Handle minus action
//
function onMinus(a, b) {
  let res = a - b;
  console.log(a);
  console.log(b);
  console.log("minus btn pressed");
  console.log(res);
  showResult(res);
}

//
//  Handle divide action
//
function onDivide(a, b) {
  let res = a / b;
  showResult(res);
}

//
//  Handle onAverage action
//
function onAverage(a, b) {
  let res = (a + b) / 2;
  showResult(res);
}

//
// Show a number on the result H1
//
function showResult(value) {
  const res = document.querySelector("h1");
  res.innerHTML = `Result: ${value}`;
}

//
// Start program
//
bindEvents();
