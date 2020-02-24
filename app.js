// nuestros inputs, se usa querySelector o querySelectorAll envez
// de usar getElementById es como que la manera más moderna de hacerlo
const inputNumbers = document.querySelector("#txt-numbers");
const buttons = document.querySelectorAll(".btn");
const btnEqual = document.querySelector(".equals");
const btnClean = document.querySelector(".clean");

// Aqui a cada boton le agregamos el evento click y la funcion agregar valor
// se hace con for each para no hacerlo manualmente
buttons.forEach(button => {
    button.addEventListener('click', addValue)
});
// Le damos su funcion al iual
btnEqual.addEventListener('click', showResult)

btnClean.addEventListener('click', clean)

// aqui lo que hace es leer el "evento click" y se fija a que boton le aplastaste(target)
// y agarras su valor y lo concatenas al campo de texto
function addValue(event) {
    inputNumbers.value += event.target.value;
}

//limpia el campo de texto
function clean() {
    inputNumbers.value = "";
}

// "Imprime" el resultado en el campo de texto
function showResult() {
    let finalResult = eval(inputNumbers.value);
    inputNumbers.value = finalResult;
}