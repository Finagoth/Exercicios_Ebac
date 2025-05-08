document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-idade').addEventListener('submit', function(e) {
        e.preventDefault();

    let numeroIdade = document.getElementById('numero-idade').value;
    numeroIdade = parseInt(numeroIdade);

    if (isNaN(numeroIdade) || numeroIdade < 0) {
        alert('Digite um ano válido!');
        return;
    }

    const anoAtual = new Date().getFullYear();
    const anoNascimento = anoAtual - numeroIdade;

    document.getElementById('resultado-valor').innerText = anoNascimento;
    document.querySelector('.resultado').style.display = 'block'
    });
});