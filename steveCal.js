const result = document.querySelector(".js-result");
const reset = document.querySelector(".js-reset");
const numberss = Array.from(document.querySelector(".js-number"));
const operatorss = Array.from(document.querySelector(".js-operation"));
const equal = document.querySelector(".js-equals");


let firstValue,
firstDone,
secondValue,
secondDone,
currentOperation;

function handleNumClick(e){
  const clickedNum = e.target.innerText;
  if(!firstDone){
    firstValue += clickedNum;
    result.innerText = firstValue;
  }else{
    secondValue += clickedNum;
    result.innerText = secondValue;
    secondDone = true;//  2번째 숫자까지 입력이 완료!
  }
}

function calculate(){
  const operation = function(){
    const valueA = parseInt(firstValue,10);
    const valueB = parseInt(secondValue,10);
    switch(currentOperation){
    case "+":
      return valueA+valueB;
    case "-":
      return valueA-valueB;
    case "*":
      return valueA*valueB;
    case "/":
      return valueA/valueB;
     default:
       return;
    }
  };
  result.innerText = operation;
  firstValue = operation;
  secondValue = "";
  second = false; // 2번째꺼 받을 준비!
}

function handleOperatorClick(){
  const clickedOper = e.target.innerText;
  if(!firstDone){
    firstDone = true;
  }
  if(firstDone && secondDone)
    calculate();
   currentOperation = clickedOper;
}

function handleResetClick(){
  firstValue = "";
  secondValue = "";
  firsDone = 0;
  secondDone = 0; // 0도 어짜피 false다!
  currentOperation = "";
  result.innerText = "";
}

function handleEqualClick(){
  if(firstValue && secondDone)
    calculate();
}

numberss.forEach((num) => function{
  num.addEventListener('click', handleNumClick);
})
operatorss.forEach((operator) => function{
  operator.addEventListener('click', handleOperatorClick);
})

reset.addEventListener('click', handleResetClick);
equal.addEventListener('click', handleEqualClick);
