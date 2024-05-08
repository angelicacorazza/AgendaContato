const form = document.getElementById('form-atividade')
let linhas = document.querySelector('tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = `<tr>
    <td>${inputNomeAtividade.value}</td>
    <td>${inputNumeroContato.value}</td>
    </tr>`;

    linhas.innerHTML += linha;

    inputNomeAtividade.value =``;
    inputNumeroContato.value =``;

});