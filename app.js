function calc(){

    let numberr1=document.getElementById("number1").value;
    let numberr2=document.getElementById("number2").value;
    let operator=document.getElementById("operator").value;
    let output=document.getElementById("output");
    let lastout=document.getElementById("lastout");

let number1=Number(numberr1);
let number2=Number(numberr2);
    console.log("number 1 ="+""+number1+""+""+""+"number 2 ="+number2+""+""+""+"operator ="+""+operator)

    

    let final=0;
    switch(operator){

    case "+":
    final=number1+number2;
    break;

    
    case "-":
        final=number1-number2;
        break;
    
    case "*":
        final=number1*number2;
        break;
    
    case "/":
        final=number1/number2;
        break;
    
    case "%":
        final=number1%number2;
        break;
    
    default:
        console.log("invalid Input")
        break;

}

// output.innerHTML="number 1 ="+""+number1+""+""+""+"number 2 ="+number2+""+""+""+"operator ="+""+operator+"""="final
//output.innerHTML="number 01 :   "+number1+"        "+"Number 02 :     "+number2+"       "+"Operator :     "+operator+"   ="+final;
lastout.innerHTML="Answer=   "+final;
}
