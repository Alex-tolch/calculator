function add(a, b){
    return a + b;
}

var substract = function substract(a, b){
    return a - b;
}

let multiply = (a,b) => a * b;

function divide(a, b){
    return a/b;
}

function sqrt(a){
    return Math.sqrt(a);
}

function pow(a, b) {
    return Math.pow(a, b);
}

let history = document.getElementById('history');

function calculate(expression, last_operation = "") {
    let first = expression.match(/^\-?\d+/);
    let second = expression.match(/\d+$/);
    let operation = expression.match(/(\+|\-|\*|\/|p)/g).pop();
    // console.log("operation: "+operation)
    switch(operation) {
        case '+':
            expression = add(+first, +second).toString();
            console.log(first+operation+second);
            history.innerText = history.innerText+"\n"+first+operation+second+"="+expression;
            expression = expression+last_operation;
            break;
        case '-':
            expression = substract(+first, +second).toString();
            console.log(first+operation+second);
            history.innerText = history.innerText+"\n"+first+operation+second+"="+expression;
            expression = expression+last_operation;
            break;
        case '*':
            expression = multiply(+first, +second).toString();
            console.log(first+operation+second);
            history.innerText = history.innerText+"\n"+first+operation+second+"="+expression;
            expression = expression+last_operation;
            break;
        case '/':
            if (+second == 0) {
                alert('unable divide on 0');
                expression = "";
                break;
            } else {
                expression = divide(+first, +second).toString();
                console.log(first+operation+second);
                history.innerText = history.innerText+"\n"+first+operation+second+"="+expression;
                expression = expression+last_operation;
                break;
            }
        case 'p':

            expression = pow(+first, +second).toString();
            console.log(first+operation+second);
            history.innerText = history.innerText+"\n"+first+operation+second+"="+expression;
            expression = expression+last_operation;
            break;
        }
    return expression;
}

function one_number_calculate(expression, operation, last_operation = "") {
    let first = expression.match(/^\-?\d+/);
    switch(operation) {
        case 'sqrt':
            if (+first >= 0) {
                expression = sqrt(+first).toString();
                console.log(first+operation);
                history.innerText = history.innerText+"\n"+first+operation+"="+expression;
                expression = expression+last_operation;
                break;
            } else {
                alert('unable get sqrt of value < 0');
                break;
            }
        }
    return expression;
}

function two_number_operation(expression, regex=/\-?[0-9]+(\+|\-|\*|\/|p)[0-9]+/) {
    if (expression.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function one_number_operation(expression, regex=/\-?[0-9]+/) {
    if (expression.match(regex)) {
        return true;
    } else {
        return false;
    }
}


function display(id){
    let el = document.getElementById(id);
    let result_field = document.getElementById('input_field');
    if (el.innerText.match(/CE/)) {
        result_field.value = result_field.value.slice(0, -1);
    } else if (el.innerText.match(/C/)) { ///если нажато удаление текущих вычислений
        result_field.value = "";
        history.innerText = "";
    } else if (el.innerText.match(/sqrt/)) { // если введено число и нажато вычиление кв корня
        if (one_number_operation(result_field.value)) {
            result_field.value = one_number_calculate(result_field.value, el.innerText);
        }
    } else if (el.innerText.match(/\=/) && !two_number_operation(result_field.value)) { // если нажато равно и выражение не соответствует: число + операция + число
        result_field.value = result_field.value;
    } else if (['+', '-', '*', '/', 'p'].includes(result_field.value.slice(-1)) && el.innerText.match(/(\+|\-|\*|\/|p)/)) { // если последний элемент выражения - операция и нажатое значение - операция
        result_field.value = result_field.value.slice(0, -1);
        result_field.value = result_field.value+el.innerText;
    } else if (two_number_operation(result_field.value) && el.innerText.match(/\=/)) { // если текущее выражение соответствует: число + операция + число И нажато =
        result_field.value = calculate(result_field.value);
    } else if (two_number_operation(result_field.value) && ['+', '-', '*', '/', 'p'].includes(el.innerText)) { // если текущее выражение соответствует: число + операция + число И нажата операция
        result_field.value = calculate(result_field.value, el.innerText);
    } else {
        result_field.value = result_field.value + el.innerText;
    }
}

