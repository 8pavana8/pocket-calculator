var execution = false;
var exepressArray= [];
var decStatus = false;
var piStat = false;
var decimalInserted = false;
var firstPercent = false;
var symbolStatus = false;
var i = 7;
var operationInserted = false;
var finalSym = false;
var exponential;
var initialNegate = false;
var negated = false;
  console.log("var status", finalSym, operationInserted, execution, decStatus, piStat, decimalInserted);
//logs false to the console after loading onto the page
function insertNum(num){
  if(execution == false){
  document.calculator.display.value = "";
  execution = true;
}

//replaces operators
if(num === '*' || num === '/' || num === '+'|| num === '-'){
  if( exepressArray[ exepressArray.length - 1] == '+' ||  exepressArray[ exepressArray.length - 1] == '-' ||  exepressArray[ exepressArray.length -1] == '*' ||  exepressArray[ exepressArray.length - 1] == '/'){
     exepressArray.pop();
     exepressArray.push(num);
    operationInserted = true;
    console.log("raw array",  exepressArray);
  }
}


  if(operationInserted == false){
    document.calculator.display.value = document.calculator.display.value + num;
     exepressArray.push(num);
      console.log("joined array",  exepressArray.join(''));
  }

  if(Number(document.calculator.display.value.length) <= 10){
    document.calculator.display.value = document.calculator.display.value;
  }else{
    document.getElementsByClassName("button").disabled = true;
  }
  //disables buttons to prevent overflow

  if(decimalInserted == false){
 let commaInput = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
 document.calculator.display.value = commaInput;
  }
}

function clean(){
  finalSym = false;
  operationInserted = false;
  document.calculator.display.value=0;
   i = i = 7;
  execution = false;
  decStatus = false;
  piStat = false;
  decimalInserted = false;
  initialNegate = false;
  console.log(finalSym, operationInserted, execution, decStatus, piStat, decimalInserted);
     exepressArray = [];
    document.getElementsByClassName("button").disabled = false;

}

function clearOnOperation(){
  //this functions clears the display after clicking an operator
  operationInserted = false;
   i = i = 7;
  symbolStatus = false;
  firstPercent = false;
  document.calculator.display.value= 0;
  execution = false;
  decStatus = false;
  piStat = false;
  decimalInserted = false;
  initialNegate = true;
    document.getElementsByClassName("button").disabled = false;

}

function equals(){
  symbolStatus = false;
  firstPercent = false;
  piStat = false;
  finalSym = true;
    document.getElementsByClassName("button").disabled = true;


  let calculatorAnswer= eval( exepressArray.join(''));
  //completes operations
  if( exepressArray.join(",").includes("e")){
     exponential = true;
  }
  console.log(exponential);

     exepressArray = [];
    //established  exepressArray as an empty array
     exepressArray.push(calculatorAnswer);
    console.log(calculatorAnswer);
  if(calculatorAnswer > 999999999 || calculatorAnswer < -999999999){
    document.calculator.display.value = calculatorAnswer.toExponential(9);
  }else{
    document.calculator.display.value=calculatorAnswer.toLocaleString("en");
  }
  if(exponential == true){
    document.calculator.display.value = calculatorAnswer;
  }

  if(document.calculator.display.value === "Infinity" || document.calculator.display.value === "NaN" || document.calculator.display.value === "∞") {
    document.calculator.display.value = "ERROR";
  }
}

function percentage(){
  //splits array in order to insert commas. Then joins it back together.
  document.calculator.display.value = document.calculator.display.value.split(",").join("");
  if(finalSym == false){
  if(firstPercent == false){
  let numberCount = document.calculator.display.value.length;
  numberCount = numberCount -1;
  console.log(numberCount);
  let removed =  exepressArray.length - numberCount;

  while( exepressArray.length >= removed){
   exepressArray.pop();
  //removes last value of  exepressArray while  exepressArray.length is greater than or equal to the number removed
  }

  document.calculator.display.value = Number(document.calculator.display.value) / 100;
   exepressArray[removed] = document.calculator.display.value;
  console.log( exepressArray);
  firstPercent = true;

}else{
  let numC2 = document.calculator.display.value.length;
  numC2 = numC2 - i;
  console.log(numC2);
  let removed2 =  exepressArray.length - numC2;
   exepressArray.splice( exepressArray.length -1);
  document.calculator.display.value = document.calculator.display.value/100;
   exepressArray.push(document.calculator.display.value);
  console.log( exepressArray);
  //logs  exepressArray to the console
  console.log(document.calculator.display.value);
  if(document.calculator.display.value>= 0.9999999){
    let power= Number(document.calculator.display.value);
    console.log(typeof power);
    document.calculator.display.value = power.toExponential(9);
    //uses scientific notation after 9 digits
  }
  console.log("percentaged array",  exepressArray);
}
}else{
  document.calculator.display.value = document.calculator.display.value/100;
   exepressArray = [];
   exepressArray.push(document.calculator.display.value);
  let power= Number(document.calculator.display.value);
  console.log(typeof power);
  if(document.calculator.display.value >= 0.9999999){
  document.calculator.display.value = power.toExponential(9);
    }
  }
}

function negation(){
  document.calculator.display.value = document.calculator.display.value.split(",").join('');
   let negNums = document.calculator.display.value.length;
   document.calculator.display.value = document.calculator.display.value * -1;
   let negVal = document.calculator.display.value;
   document.calculator.display.value = Number(document.calculator.display.value.split(",").join('')).toLocaleString();
   if(initialNegate == false){
      exepressArray[0]=  exepressArray[0] *-1;
     //obtains value at the "0" position in the array and multiplies it by -1
     console.log( exepressArray);
     initialNegate = true;
     negated = true;
   }else {
     let negLoc =  exepressArray.length - negNums;

     if( exepressArray.length >= negLoc){
        exepressArray.pop();
       //removes value at the end of the array
       negated = true;
     }
      exepressArray.push(negVal);
   }
 //   if( exepressArray.length-1 === "-"){
 //   num === "+";
 // }
 }



function decimalInsert(num){
  if(decStatus == false){
    document.calculator.display.value = document.calculator.display.value + num;
     exepressArray.push(num);
    //pushes to the array
    console.log( exepressArray);
    decStatus = true;
    decimalInserted = true;
    document.getElementById("decimal").disabled = true;
    //disables decimal button after clicking it
  }
}
function piInsert(num){
  if(piStat == false){
    document.calculator.display.value = '';
    document.calculator.display.value = document.calculator.display.value + num;
     exepressArray.push(num);
    console.log( exepressArray);
    piStat = true;
  }
}

