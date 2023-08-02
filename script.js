document.addEventListener("DOMContentLoaded", () => {
    const previousValueElement = document.querySelector(".previous");
    const currentValueElement = document.querySelector(".current");
    const clearButton = document.getElementById("clear-btn");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const decimalButton = document.getElementById("decimal");
    const equalButton = document.getElementById("equal");
  
    let currentValue = "";
    let previousValue = "";
    let currentOperator = null;
  
    // Function to update the screen with the current value
    function updateScreen() {
      currentValueElement.textContent = currentValue;
      previousValueElement.textContent = previousValue;
    }
  
    // Function to handle number button click
    function handleNumberClick(number) {
      currentValue += number;
      updateScreen();
    }
  
    // Function to handle operator button click
    function handleOperatorClick(operator) {
      if (currentValue === "") return;
      if (previousValue !== "") {
        calculate();
      }
      currentOperator = operator;
      previousValue = currentValue;
      currentValue = "";
      updateScreen();
    }
  
    // Function to handle decimal button click
    function handleDecimalClick() {
      if (currentValue.includes(".")) return;
      currentValue += ".";
      updateScreen();
    }
  
    // Function to handle equal button click
    function handleEqualClick() {
      if (currentValue === "" || previousValue === "" || currentOperator === null) return;
      calculate();
      currentOperator = null;
    }
  
    // Function to perform the calculation
    function calculate() {
      const previous = parseFloat(previousValue);
      const current = parseFloat(currentValue);
      switch (currentOperator) {
        case "+":
          currentValue = (previous + current).toString();
          break;
        case "-":
          currentValue = (previous - current).toString();
          break;
        case "x":
          currentValue = (previous * current).toString();
          break;
        case "/":
          currentValue = (previous / current).toString();
          break;
      }
      previousValue = "";
      updateScreen();
    }
  
    // Event listeners for number buttons
    numberButtons.forEach((button) => {
      button.addEventListener("click", () => {
        handleNumberClick(button.textContent);
      });
    });
  
    // Event listeners for operator buttons
    operatorButtons.forEach((button) => {
      button.addEventListener("click", () => {
        handleOperatorClick(button.textContent);
      });
    });
  
    // Event listener for decimal button
    decimalButton.addEventListener("click", () => {
      handleDecimalClick();
    });
  
    // Event listener for equal button
    equalButton.addEventListener("click", () => {
      handleEqualClick();
    });
  
    // Event listener for clear button
    clearButton.addEventListener("click", () => {
      currentValue = "";
      previousValue = "";
      currentOperator = null;
      updateScreen();
    });
  });