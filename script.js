const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="./images/aprovado.png" alt="">`;
const imgReprovado = `<img src="./images/reprovado.png" alt="">`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat( prompt("Digite a nota mínima:") );

let linhaRegistro = "";




form.addEventListener( "submit", function(evento){ 
    evento.preventDefault();

    adicionarLinhas();
    atualizarTabela();
    atualizarMediaFinal();
    
} );

function adicionarLinhas() {
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push( parseFloat(inputNotaAtividade.value) );

        let resultadoNota = inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado;
        let inputLinha =
        `<tr> 
            <td>${inputNomeAtividade.value} </td> 
            <td>${inputNotaAtividade.value}</td>
            <td>${resultadoNota}</td>
        </tr>`;

        linhaRegistro += inputLinha;
    }

        inputNomeAtividade.value = "";
        inputNotaAtividade.value = "";
}

function atualizarTabela() {
    const corpotabela = document.querySelector("tbody");
    corpotabela.innerHTML = linhaRegistro;
}


function calculaMediaFinal() {
    let somaNotas = 0;

    for (let indice = 0; indice < notas.length; indice++) {
        somaNotas += notas[indice];
    }

    return somaNotas / notas.length;
}

function atualizarMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media-final-valor").innerHTML = mediaFinal;
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;


    // console.log(`A média é: ${mediaNota}`);
}

