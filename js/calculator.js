function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

// var substract = function substract(a, b){
//     return a - b;
// }

// let multiply = (a,b) => a * b;

// function divide(a, b){
//     return a / b;
// }

// function get_input_number(){
    
// }
function display(id){
    let el = document.getElementById(id);
    let result_field = document.getElementById('input_field');
    if (['+', '-', '*', '/'].includes(result_field.value.slice(-1)) && el.innerText.match(/(\+|\-|\*|\/)/)) {
        console.log(result_field.value)
        result_field.value = result_field.value.slice(0, -1);
        console.log(result_field.value)
        result_field.value = result_field.value+el.innerText;
    } else if (result_field.value.match(/\-?[0-9]+(\+|\-|\*|\/)[0-9]+/) && ['+', '-', '*', '/'].includes(el.innerText)) {
        let first = result_field.value.match(/^\-?\d+/);
        let second = result_field.value.match(/\d+$/);
        let operation = result_field.value.match(/(\+|\-|\*|\/)/g).pop();
        // console.log("operation: "+operation)
        switch(operation) {
            case '+':
                result_field.value = add(+first, +second).toString()+el.innerText
                console.log(first+operation+second)
                break;
            case '-':
                result_field.value = substract(+first, +second).toString()+el.innerText
                console.log(first+operation+second)
                break;
            case '*':
                result_field.value = multiply(+first, +second).toString()+el.innerText
                console.log(first+operation+second)
                break;
            case '/':
                result_field.value = divide(+first, +second).toString()+el.innerText
                console.log(first+operation+second)
                break;
          }
    } else {
        result_field.value = result_field.value + el.innerText;

    }
    
}

