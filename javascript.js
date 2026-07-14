const numberbuttons = document.querySelectorAll(".number");
const operbuttons = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen");
let num1="0";
let num2="0";
let currentop;

numberbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        num = button.textContent;
        screen.textContent = screen.textContent + num;
        if (screen.textContent.includes("+") || (screen.textContent.includes("-") || (screen.textContent.includes("x") || (screen.textContent.includes("÷"))))){
            num2 = num2 + num;
        }
    });
});

operbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        operation = button.textContent;
        if (operation !== '='){
            if (screen.textContent[screen.textContent.length - 1] !== '+' && screen.textContent[screen.textContent.length - 1] !== '-' && screen.textContent[screen.textContent.length - 1] !== 'x' && screen.textContent[screen.textContent.length - 1] !== '÷' && screen.textContent.length > 0) {
                num1 = screen.textContent;
                screen.textContent = screen.textContent + operation;
                currentop = operation;
            }
        }
        else if (operation === '=' && (screen.textContent.includes("+") || (screen.textContent.includes("-") || (screen.textContent.includes("x") || (screen.textContent.includes("÷")))))){
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
            screen.textContent = answer;
        }
        
    });
});

