// Task 1: Change heading text (runs automatically when page loads)
const heading = document.getElementById("greeting");
heading.innerText = "Welcome to JavaScript DOM";


// Task 2: Change paragraph text when button is clicked
const paragraph = document.getElementById("myParagraph");
const btnChangeText = document.getElementById("btnChangeText");

btnChangeText.onclick = function() {
  paragraph.innerText = "Paragraph text changed!";
};


// Task 3: Change background color when button is clicked
const btnChangeBg = document.getElementById("btnChangeBg");

btnChangeBg.onclick = function() {
  document.body.style.backgroundColor = "lightblue";
};


// Task 4: Show alert when button is clicked
const btnAlert = document.getElementById("btnAlert");

btnAlert.onclick = function() {
  alert("DOM is working!");
};


// Task 5: Update paragraph with input value
const inputField = document.getElementById("userInput");
const btnUpdate = document.getElementById("btnUpdate");
const output = document.getElementById("output");

btnUpdate.onclick = function() {
  const text = inputField.value.trim();
  
  if (text === "") {
    output.innerText = "→ Please type something!";
  } else {
    output.innerText = text;
  }
  
  // Optional: clear input after updating
  // inputField.value = "";
};
