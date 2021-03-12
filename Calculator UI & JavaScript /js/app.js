function click1() {
document.Calculator.display.value += 1;
}

function click2() {
    document.Calculator.display.value += 2;
}

function click3() {
    document.Calculator.display.value += 3;
 }

 function click4() {
    document.Calculator.display.value += 4;
 }

 function click5() {
    document.Calculator.display.value += 5;
 }

 function click6() {
    document.Calculator.display.value += 6;
}

function click7() {
 document.Calculator.display.value += 7;
 } 
 
 function click8() {
    document.Calculator.display.value += 8;
 }   

 function click9() {
    document.Calculator.display.value += 9;
}  

function click0() {
    document.Calculator.display.value += 0;
 }  

function clickclear() {
    document.Calculator.display.value ="";
 }
 
 function clickplusormin() {
    document.Calculator.display.value += "+/-";
 }  
 function clickpercent() {
    document.Calculator.display.value += "%";
 }   

 function clickdiv() {
    document.Calculator.display.value += "/";
 }   

 function clickmultiply() {
    document.Calculator.display.value += "*";
 }   

 function clicksub() {
    document.Calculator.display.value += "-";
 }   
 function clicksum() {
    document.Calculator.display.value +="+";
 }   

 function clickequals() {
    
    var Display = eval(document.Calculator.display.value); 
   document.Calculator.display.value = Display;
 } 

  