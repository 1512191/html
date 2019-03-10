function Add(a, b){
    return a+b;
}
function Sub(a, b){
    return a-b;
}
function Mul(a, b){
    return a*b;
}
function Div(a, b){
    if(b == 0){
        return 'Infinitive'
    }else{
        return a/b;
    }
}
function Reset() {  
    return 0;
}
function Point(a) { 
    return a + '.0';
 }
 var caculate = (a, op, b)=>{
     a = parseFloat(a);
     b = parseFloat(b);
     switch (op)
     {
         case '+': return a+b;
         case '-':return a-b;
         case 'x':return a*b;
         case '/': {
            if(b == 0){
                return 'Infinitive'
            }else{
                return a/b;
            }
         }
         case '.':{
             if(a == 0){
                 return '0.' + b;
             }else{
                 return a + '.' + b;
             }
         }
         case '=': return b;
     }
 }
 const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  function inputDigit(number) {
   
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
      calculator.displayValue = number;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? number : displayValue + number;
    }
  }
  function updateDisplay() {
    const display = document.querySelector('#result');
    display.value = calculator.displayValue;
  }
  function inputDecimal(point) {
    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(point)) {
      // Append the decimal point
      calculator.displayValue += point;
    }
  }
  updateDisplay();
 //var a=[];
// $('input[type="button"]').on('click', function(){

//     //console.log($(this).val())
//     //a.push($(this).val())
//     var num = $(this).val();
//     if(!isNaN(num)){
//         console.log(num)
//     }
// })
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = caculate(firstOperand, operator, inputValue)
      //const result = performCalculation[operator](firstOperand, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }
  const result = document.querySelector('#result')
const keys = document.querySelector('.keyboard');
keys.addEventListener('click', (event) => {
  const { target } = event;

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('point')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
  }

  if (target.classList.contains('reset')) {
    result.val(0);
    return;
  }
  inputDigit(target.value);
  inputDecimal(target.value);
  updateDisplay();
//   console.log('digit', target.value);
});
