let total=0;
let buffer = "0"
let previousOperator=null;
const screen = document.querySelector(".screen");

function init(){
    const button=document.querySelector(".calc-buttons");
    button.addEventListener("click",function(event){
        if(event.target.innerText.length == 1){
            buttonclick(event.target.innerText);
        }
        
    })
}

function buttonclick(value){
    if(isNaN(value)){
        handlesymbol(value);
    }
    else{
        handleNumber(value);
    }
    screen.innerText=buffer;
}

function handleNumber(value){
    if (buffer === "0"){
        buffer = value;
    }
    else{
        buffer += value;
    }
}

function handlesymbol(value){
    switch(value){
        case "C":
            buffer="0";
            total=0;
            break;
        case "←":
            if(buffer.length == 1){
                buffer="0";
            }
            else{
                buffer=buffer.substring(0,buffer.length-1);
            }
            break;
        case "=":
            if(previousOperator == null){
                return;
            }
            performoperation(parseInt(buffer));
            previousOperator = null;
            buffer = total;
            total = 0;
            break;
        case "÷":
        case "×":
        case "−":
        case "+":
            handlemath(value);
            break;
    }
}

function handlemath(value){
    if (buffer === "0"){
        return;
    }

    intbuffer = parseInt(buffer);
    if(total == 0){
        total = intbuffer;
    }
    else{
        performoperation(intbuffer);
    }

    previousOperator = value;
    buffer = "0";
}

function performoperation(intbuffer){
    if (previousOperator === "+"){
        total+=intbuffer;
    }
    else if(previousOperator === "×"){
        total*=intbuffer;
    }
    else if(previousOperator === "−"){
        total-=intbuffer;
    }
    else{
        total/=intbuffer;
    }
    
}
init();