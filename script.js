let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let inputField = document.querySelector('input');
        let buttonValue = e.target.innerHTML;

        if (buttonValue == '=') {
            try {
                let result = new Function('return ' + string)();
                inputField.value = result;
                string = result.toString(); 
            } catch (error) {
                inputField.value = "Error"; 
                string = "";
            }
        } 
        else if (buttonValue == 'C') {
            string = "";
            inputField.value = string; 
        } 
        else {
            string =string+ buttonValue; 
            inputField.value = string; 
        }
    });
});
