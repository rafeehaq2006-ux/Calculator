const numberbuttons = document.querySelectorAll(".number");
const operbuttons = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen");
const delbuttons = document.querySelectorAll(".deletion");

let num1 = "0";
let num2 = "";
let currentop = "";
let equalled = false;

delbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        content = button.textContent;
        if (content === "AC"){
            num1 = "0";
            num2 = "";
            currentop = "";
            screen.textContent = "";
            equalled = false;
        }
        else {
            let lastchar = screen.textContent[screen.textContent.length - 1];
            if (currentop !== ""){
                if (lastchar.charCodeAt(0) >= 48 && lastchar.charCodeAt(0) <= 57){
                    num2 = num2.slice(0, -1);
                } else {
                    currentop = "";
                    num2 = "";
                }
            }
            else{
                num1 = num1.slice(0, -1);
                if (num1.length === 0 || num1 === "-"){
                    num1 = "0";
                }
            }
            screen.textContent = screen.textContent.slice(0, -1);
        }
    });
});

numberbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        num = button.textContent;
        if (equalled){
            screen.textContent = num;
            num1 = num;
            num2 = "";
            currentop = "";
            equalled = false;
        }
        else if (currentop !== ""){
            screen.textContent = screen.textContent + num;
            num2 = num2 + num;
        }
        else{
            if (num1 === "0"){ num1 = num; } else { num1 = num1 + num; }
            screen.textContent = screen.textContent + num;
        }
    });
});

operbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        operation = button.textContent;
        if (operation !== '='){
            if (operation === '-' && currentop === "" && (screen.textContent === "" || screen.textContent === "0") && num1 === "0"){
                num1 = "-";
                screen.textContent = "-";
                return;
            }
            if (equalled){
                num1 = screen.textContent;
                num2 = "";
                currentop = operation;
                screen.textContent = num1 + operation;
                equalled = false;
            }
            else if (currentop === "" && screen.textContent.length > 0 && num1 !== "-"){
                num1 = screen.textContent;
                screen.textContent = screen.textContent + operation;
                currentop = operation;
            }
            else if (currentop !== "" && num2 === ""){
                screen.textContent = screen.textContent.slice(0, -1) + operation;
                currentop = operation;
            }
            else if (currentop !== "" && num2 !== ""){
                num1 = formula();
                num2 = "";
                screen.textContent = num1 + operation;
                currentop = operation;
            }
        }
        else if (operation === '=' && currentop !== ""){
            screen.textContent = formula();
            equalled = true;
        }
    });
});

function formula(){
    let answer;
    switch(currentop){
        case '+': answer = Number(num1) + Number(num2);
        break;
        case '-': answer = Number(num1) - Number(num2);
        break;
        case 'x': answer = Number(num1) * Number(num2);
        break;
        case '÷': answer = Number(num1) / Number(num2);
        break;
    }
    return answer;
}