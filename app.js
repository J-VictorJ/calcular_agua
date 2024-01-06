/*
Jovens até os 17 anos	40 ml por cada kg
De 18 a 55 anos		35 ml por cada kg
De 55 a 65 anos		30 ml por cada kg
66 anos em diante	25 ml por cada kg
atletas			50 ml por cada kg

*/
const form = document.querySelector("#formulario");
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputIdade = e.target.querySelector("#idade");
    const inputPeso = e.target.querySelector("#peso");
    const checkBoxAtleta = e.target.querySelector("#atleta");

    const idade = Number(inputIdade.value);
    const peso = Number(inputPeso.value);
    const isAtleta = checkBoxAtleta.checked;

    if(!idade){
        setResult("Idade inválida", false);
        return;
    }
    if(!peso){
        setResult("Peso inválido", false);
        return;
    }

    const agua = getAgua(idade, peso, isAtleta);

    const mensagem = `Você deve beber ${agua}ml de água <strong>durante</strong> o dia`;

    setResult(mensagem, true);
});

function getAgua(idade, peso, isAtleta){
    
    let litros_atleta;
    if(isAtleta && idade >= 16 && idade <= 50){
        litros_atleta = 50;}
    else{
        if(idade <= 17){return peso * 40}
        if(idade >= 18 && idade <= 55){return peso * 35}
        if(idade >= 55 && idade <= 65){return peso * 30}
        if(idade >= 66){return peso * 25}
    }
    return peso * litros_atleta;
}

function criaP(){
    const p = document.createElement("p");
    return p;
}

function setResult (mensagem, isValid){
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = '';
    const p = criaP();

    if(isValid){
        p.classList.add("paragrafo-resultado");
    }else{
        p.classList.add("bad");
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}
function info(){
    const info = document.querySelector(".info");
    if(info){
        info.style.display = "block";
    }
    
}
function fontes(){
    const fontes = document.querySelector(".fonte-none");
    if(fontes){
        fontes.style.display = "block";
    }
}