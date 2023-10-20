
// lista de alunos


const alunos = ["milena", "bia", "helo", "lucas", "luanna", "gab"];
let lista = "";

function listaDealunos() {

    let i = 0

    while (i < alunos.lenght) {
        lista += alunos[i] + "<br>"
        i++
    }

    document.getElementById("lista").innerHTML = lista;
}