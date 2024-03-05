function valuebutton(e){
    calculatorform.screen.value += e.value
}

function clearbtn(){
    calculatorform.screen.value=null;
}

function calculate(){
    calculatorform.screen.value=eval(calculatorform.screen.value)
}