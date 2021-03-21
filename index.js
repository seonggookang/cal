let temp ;
let displayment = document.querySelector('#input');

const numbers= document.querySelectorAll('.number');
  numbers.forEach((number) => {
    number.addEventListener('click', (event) => { 
      let targetNumber = event.target.value;
      displayment.value += Number(targetNumber);
      temp = displayment.value;
      console.log(targetNumber);
      console.log(temp);
    })
  });

const operators = document.querySelectorAll('.operator');
  operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
      let targetOperator = event.target.value;
      console.log(temp.length-1, temp.length);
      displayment.value += targetOperator;
      temp = displayment.value;
      console.log(targetOperator); 
    })
  })
 
const resultBtn = document.querySelector('#result');
  resultBtn.addEventListener('click', () => {
    // let result = displayment;
    return temp;
  })

const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click', () => {
    displayment.value = "";
  })

//   var b = 'ABCD'

// var slicedStr = b.slice(1, 3);  // slice process the slice as the array

// console.log(b)
// // "ABCD"
// console.log(slicedStr)

// console.log(slicedStr[0]);
// console.log(slicedStr[1]);




// clearBtn.addEventListener('click', (event)=>{
//   displayment.value = '';
// }

// function clickNumber(e){
//   let clicked = e.taret;
//   if(clicked == number[3].value){
//     temp = clicked;
//     displayment = temp;
//   } else if(clicked == number[4].value){
//     temp = clicked;
//     displayment = temp;
//   } else if(clicked == number[5].value){
//     temp = clicked;
//     displayment = temp;
//   } else if(clicked == number[7].value){
//     temp = clicked;
//     displayment = temp;
//   } else if(clicked == number[8].value){
//     temp = clicked;
//     displayment = temp;
//   } else if(clicked == number[9].value){
//     temp = clicked;
//     displayment = temp;
//   } else if(clicked == number[11].value){
//     temp = clicked;
//     displayment = temp;
//   } else if(clicked == number[12].value){
//     temp = clicked;
//     displayment = temp;
//   } else if(clicked == number[13].value){
//     temp = clicked;
//     displayment = temp;
//     }
// };