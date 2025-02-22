const form = document.getElementById('form-formulario');
const campA = document.getElementById('numA');
const campB = document.getElementById('numB');
let formEValido = false;

function validaCampos(a, b){
    let valorA = parseFloat(a);
    let valorB = parseFloat(b);
    return valorB > valorA
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = "B é Maior"
    const mensagemError = "B é Menor"
    formEValido = validaCampos(campA.value, campB.value); 

    (formEValido) ? alert(mensagemSucesso) : alert(mensagemError)
})