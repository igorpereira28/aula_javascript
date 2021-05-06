var nome = "Igor Pereira";
var idade = "41";

alert("Meu primeiro JS");

alert("Bem vindo " + nome + " você têm " + idade + " anos");

var anos = prompt("Quantos anos têm?");

if (anos >= 18){
    alert("Maior de idade");
} else{
    alert("Menor de idade");
};

var count = 0;

while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1;
};

var conta;
for(conta = 1; conta <= 5; conta++){
    alert(conta);
};

function botao(){
    alert("Obrigado por clicar");
    document.getElementById("agradece").innerHTML = "Obrigado por ter clicado";
}


/*encaminhar para novo endereço*/
/* mesma janela*/
// window.location.href = "caminho";

 /*nova aba */
// window.open("caminho");

function trocar(){
    document.getElementById("mousemove").innerHTML = "Passou!!!";
    //alert("Trocar Texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("Trocar Texto");
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log("elemento.value");
}