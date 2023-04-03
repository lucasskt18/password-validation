
// Função para validação da senha
function SenhaVerificada () {
    var inSenha = document.getElementById("inSenha");
    var Resposta = document.getElementById("resposta");

    var senha = inSenha.value;

    var erros = []; 

    if(senha.length < 8 || senha.length > 15){
        erros.push("possuir entre 8 a 15 caracteres");
    }

    if(senha.match(/[0-9]/g) === null){
        erros.push("possuir números(no minimo, 1)");
    }

    if (senha.match(/[a-z]/g)){
        erros.push("possuir letras maiusculas(no minimo, 1)");
    }

    if(senha.math(/[W_]/g)){
        erros.push("possuir simbolos(no minimo, 1)");
    }

    if(erros.length == 0){
        outhResposta.textContent = "Ok, senha valida!"
    } else {
        outhResposta.textContent = "Erro, a senha deve ter " + erros.join(", ")
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verSenha);

