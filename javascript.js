const numberbuttons = document.querySelectorAll(".number");
const operbuttons = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen");

numberbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        num = button.textContent;
        screen.textContent = screen.textContent + num;
    });
});


