const result = document.querySelector(".js-result");
const reset = document.querySelector(".js-reset");
const equals = document.querySelector(".js-equals");
const numbers = Array.from(document.querySelectorAll(".js-number"));
const operations = Array.from(document.querySelectorAll(".js-operation"));
console.log(numbers[2]); // 배열로 출력 ex) numbers[2] : <span class="js-number">9</span>
console.log(operations);

let firstValue = "",
  firstDone,
  secondValue = "",
  secondDone,
  currentOperation;


function calculate() { 
  const operation = function(){
    const intValueA = parseInt(firstValue, 10);  // 첫번째 클릭한 숫자
    const intValueB = parseInt(secondValue, 10); // 두번째 클릭한 숫자
    switch (currentOperation) {
    case "+":
      return intValueA + intValueB;
    case "-":
      return intValueA - intValueB;
    case "/":
      return intValueA / intValueB;
    case "*":
      return intValueA * intValueB;
    default:
      return;
    }
  }
  result.innerHTML = operation();
  firstValue = operation();
  secondDone = false;
  secondValue = "";
}

function handleNumberClick(e) { // 숫자 클릭시
  const clickedNum = e.target.innerText;
  if (!firstDone) { // 참이라면 진행해라 (!firstDone은 처음 숫자클릭시 참임)
    firstValue += clickedNum; // 연달아 써버리기
    result.innerHTML = firstValue // 덮어 씌워버리기
  } else {
    secondValue += clickedNum;
    result.innerHTML = secondValue
    secondDone = true;
  }
}



function handleOperationClick(e) { // 연산자 클릭 함수
  const clickedOperation = e.target.innerText;
  if (!firstDone) {
    firstDone = true;
  }
  if (firstDone && secondDone) {
    calculate();
  }
  currentOperation = clickedOperation;
}

function handleReset() { // C 클릭시
  firstValue = "";
  secondValue = "";
  firstDone = false;
  secondDone = false;
  currentOperation = "";
  result.innerHTML = "";
}

function handleEqualsClick() { // = 클릭시
  if (firstDone && secondDone) {
    calculate();
  }
}

numbers.forEach(function(number) {
  number.addEventListener("click", handleNumberClick);
});

operations.forEach(function(operation) {
  operation.addEventListener("click", handleOperationClick);
});

reset.addEventListener("click", handleReset);
equals.addEventListener("click", handleEqualsClick);