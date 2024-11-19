const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const result = document.getElementById("output");



const numToRom = (num) => {
  const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let result = "";

    for (let [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }
    return result;
};


const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (inputInt == -1) {
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if(inputInt < -1) {
    result.innerText = "Please enter a number greater than or equal to 1";
  } else if (!numberInput.value || isNaN(inputInt) || inputInt < 0){
    result.innerText = "Please enter a valid number";
    return;
  } else if (inputInt >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999";
  } else {
    result.textContent = numToRom(inputInt);
  numberInput.value = "";
  }
};


convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
