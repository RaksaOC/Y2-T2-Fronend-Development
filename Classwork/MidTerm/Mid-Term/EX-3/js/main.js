//
//  Clear the inputs
//
function clearInput() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  provinceDropDown.selectedIndex = 0;
  genderRadios.forEach((rad) => (rad.checked = false));
  skillsCheckboxes.forEach((check) => (check.checked = false));
  commentTextArea.value = "";
}

//
//  Get the input and create a new row on the table
//
function onAddUser(event) {
  event.preventDefault();

  // TODO Create a row
  let row = document.createElement("tr");
  let fNameColumn = document.createElement("td");
  let lNameColumn = document.createElement("td");
  let province = document.createElement("td");
  let gender = document.createElement("td");
  let skill = document.createElement("td");
  let comment = document.createElement("td");

  fNameColumn.innerText = firstNameInput.value;
  lNameColumn.innerText = lastNameInput.value;
  province.innerText = provinceDropDown.value;

  // search the array of gender radio to find the selected one
  genderRadios.forEach((rad) => {
    if (rad.checked) {
      gender.innerText = rad.value;
    }
  });

  // search the array of skills checkboxes and push the selected items to the array
  let skills = [];
  skillsCheckboxes.forEach((box) => {
    if (box.checked) {
      skills.push(box.value);
    }
  });
  skill.innerText = skills.toString();
  
  comment.innerText = commentTextArea.value;

  row.appendChild(fNameColumn);
  row.appendChild(lNameColumn);
  row.appendChild(province);
  row.appendChild(gender);
  row.appendChild(skill);
  row.appendChild(comment);

  table.appendChild(row);
  clearInput();

  // TODO Add the first name to the row

  // TODO Add the last name to the row

  // TODO Add the province to the row

  // TODO Add the gender to the row

  // TODO Add the skills  to the row

  // TODO Add the comment to the row

  // TODO Add TR to tbody

  // TODO Clear inputs
}

// Main
const firstNameInput = document.querySelector("#firstname");
const lastNameInput = document.querySelector("#lastname");
const provinceDropDown = document.querySelector("#province");
const genderRadios = document.querySelectorAll('input[type="radio"]'); // This will return a collection of DOM elements
const skillsCheckboxes = document.querySelectorAll(".skill"); // This will return a collection of DOM elements
const commentTextArea = document.querySelector("#comment");

const table = document.querySelector("tbody");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", onAddUser);
