
let input = document.querySelector(".input");
const bodyCalculator = document.querySelector(".body-calculator");
const btn_20 = document.querySelector(".btn-20");
const btn_icon = document.querySelector(".bi");
const btn_21 = document.querySelector(".btn-21");
const btn_22 = document.querySelector(".btn-22");
const btn_23 = document.querySelector(".btn-23");
const btn_24 = document.querySelector(".btn-24");
const btn_25 = document.querySelector(".btn-25");
const btn_26 = document.querySelector(".btn-26");
const btn_27 = document.querySelector(".btn-27");
const btn_28 = document.querySelector(".btn-28");
const btn_29 = document.querySelector(".btn-29");
const btn_30 = document.querySelector(".btn-30");

bodyCalculator.addEventListener('click', (e) => {
    if (e.target.value === undefined) { }
    else {
       
        let key = e.target.value;
        
        switch (key) {
            case "AC":
                input.value = '';
                break;
            case "X":
                input.value = input.value.substring(0, input.value.length - 1);
                break;
            case "=":
                const evaluateExpression = new Function('return ' + input.value);
                const result = evaluateExpression();
                input.value = result;
            break;

            case '()':
                bodyCalculator.classList.toggle("body-calculator-p");
                btn_21.classList.toggle("dis-btn");
                btn_22.classList.toggle("dis-btn");
                btn_23.classList.toggle("dis-btn");
                btn_24.classList.toggle("dis-btn");
                btn_25.classList.toggle("dis-btn");
                btn_26.classList.toggle("dis-btn");
                btn_27.classList.toggle("dis-btn");
                btn_28.classList.toggle("dis-btn");
                btn_29.classList.toggle("dis-btn");
                btn_30.classList.toggle("dis-btn");
                if ( btn_20.innerHTML == '<i value="()" class="bi bi-arrows-angle-expand"></i>') {
                    btn_20.innerHTML = '<i value="()" class="bi bi-arrows-angle-contract"></i>';
                }
                else
                {
                    btn_20.innerHTML = '<i value="()" class="bi bi-arrows-angle-expand"></i>';
                }
                break;
            default:
                input.value = input.value + e.target.value;
                break;
        }
    }
});

function isValidExpression(expression) {
    const regex = /^[0-9+\-*/\s()]+$/;
    return regex.test(expression);
}


