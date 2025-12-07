
//Variaveis globais:
let iniciarBatalhaFlag = false;
let Herois = 0;
let Inimigos = [];
let Teclas = [];
let QuantidadeMaxTelas = 6;
let QuantidadeMaxInimigos = 10;
let InimigosMortos = 0;

function criarTeclas(){

        for(let i = 0; i < QuantidadeMaxTelas; i++){
            Teclas.push(new Tecla());
        }

}

function reporTeclas(){
    for(let i = 0; i < QuantidadeMaxTelas; i++){
            if(Teclas[i] === "Vazio"){
              Teclas[i] = new Tecla();  
            }
        }
}

function criarInimigos(){

    for(let i = 0; i < QuantidadeMaxInimigos; i++){
        if(i < 3){
            Inimigos[i] = new InimigoFacil();
        }else if(i < 6){
            Inimigos[i] = new InimigoMedio();
        }else if(i < 9){
            Inimigos[i] = new InimigoDificil();
        }else{
            Inimigos[i] = new InimigoBoss();
        }
    }
}

function criarHerois(){
    if(Herois === 0){
        Herois = new Heroi();
    }
}

function ButtonPressStart(){
    document.getElementById("imgPlanoFundoLoading").style.bottom = "6%"; //Ajuste na tela!
    document.getElementById("imgPlanoFundoLoading").style.backgroundPosition = "0%"; //Ajuste na tela!
    iniciarBatalha(true);
    setTimeout(() => { //Timer para conseguir "apagar" o botao!
        document.getElementById("ButtonPressStart").style.display = "none";
    }, 60); // ~60fps
}


function iniciarBatalha(iniciarBatalha){

    if(iniciarBatalhaFlag === false){
        iniciarBatalhaFlag = iniciarBatalha;
        PlanoFundo(Math.floor(Math.random() * ((7 - 1 + 1)) + 1));
        criarTeclas();
        criarInimigos();
        if(Herois === 0){
            criarHerois();  
        }
        Cache();
        ajustesCSS("Tudo", "iniciarBatalha");
    }
}


function inicarRound(qualIniciar){
    if(qualIniciar){
        if(qualIniciar == "iniciarBatalha"){
            PlanoFundo(Math.floor(Math.random() * ((7 - 1 + 1)) + 1));
            Inimigos[InimigosMortos].ataque();
        }else if(qualIniciar == "ProximoRound"){
            PlanoFundo(Math.floor(Math.random() * ((7 - 1 + 1)) + 1));
            reporTeclas(); //Garantir que tera teclas!
            ajustesCSS("Inimigo");
            Inimigos[InimigosMortos].ataque();

        }

    }
}

function fimJogo(){

}

//Declarando um funcao assíncrona(Para ter como interrompe-la e so terminar quando alguma outra coisa acontecer)
async function ajustesCSS(AnimacaoParaCarregar, qualIniciar) {

    if (AnimacaoParaCarregar === "Tudo") {
        Inimigos[InimigosMortos].ajustesCSS();
        Herois.ajustesCSS();
    } else if (AnimacaoParaCarregar === "Inimigo") {
        Inimigos[InimigosMortos].ajustesCSS();
    } else if (AnimacaoParaCarregar === "Heroi") {
        Herois.ajustesCSS();
    }

    const resultado = await TelaLoading(2000); //Obtem o resultado depois de terminar TelaLoading(); 2000 = 2 segundos!

    if (resultado === "Terminado") {
        inicarRound(qualIniciar);
    }
}

function PlanoFundo(Aleatorio){
    switch(Aleatorio){
        case 1:
            document.getElementById("imgPlanoFundo").style.backgroundImage = `url("imgs/cenarios/planoFundo/PlanoFundoGrama.png")`;
            document.getElementById("imgChao").style.backgroundImage = `url("imgs/cenarios/chao/GramaComum.png")`
            break;
        case 2:
            document.getElementById("imgPlanoFundo").style.backgroundImage = `url("imgs/cenarios/planoFundo/PlanoFundoDoce.png")`;
            document.getElementById("imgChao").style.backgroundImage = `url("imgs/cenarios/chao/GramaDoce.png")`;
            break;
        case 3:
            document.getElementById("imgPlanoFundo").style.backgroundImage = `url("imgs/cenarios/planoFundo/PlanoFundoTrigo.png")`;
            document.getElementById("imgChao").style.backgroundImage = `url("imgs/cenarios/chao/GramaTrigo.png")`;
            break;
        case 4:
            document.getElementById("imgPlanoFundo").style.backgroundImage = `url("imgs/cenarios/planoFundo/PlanoFundoDeserto.png")`;
            document.getElementById("imgChao").style.backgroundImage = `url("imgs/cenarios/chao/GramaDeserto.png")`;
            break;
        case 5:
            document.getElementById("imgPlanoFundo").style.backgroundImage = `url("imgs/cenarios/planoFundo/PlanoFundoGelo.png")`;
            document.getElementById("imgChao").style.backgroundImage = `url("imgs/cenarios/chao/GramaGelo.png")`;
            break;
        case 6:
            document.getElementById("imgPlanoFundo").style.backgroundImage = `url("imgs/cenarios/planoFundo/PlanoFundoPedras.png")`;
            document.getElementById("imgChao").style.backgroundImage = `url("imgs/cenarios/chao/GramaPedras.png")`;
            break;
        case 7:
            document.getElementById("imgPlanoFundo").style.backgroundImage = `url("imgs/cenarios/planoFundo/PlanoFundoPantano.png")`;
            document.getElementById("imgChao").style.backgroundImage = `url("imgs/cenarios/chao/GramaPantano.png")`;
            break;
    }
}

function TelaLoading(tempo) {
    return new Promise(resolve => { //Promise para retornar o async pro ajustesCSS;
        document.getElementById("imgPlanoFundoLoading").style.backgroundImage = "url(imgs/cenarios/telaLoading/Loading.gif)";
        document.getElementById("imgPlanoFundoLoading").style.bottom = "0vw";
        document.getElementById("imgPlanoFundoDoLoading").style.display = "flex";
        document.getElementById("imgPlanoFundoLoading").style.display = "flex";
        setTimeout(() => {
            document.getElementById("imgPlanoFundoLoading").style.display = "none";
            document.getElementById("imgPlanoFundoDoLoading").style.display = "none";
            resolve("Terminado");
        }, tempo);
    });
}


function Cache(){ //Nao resolve, mas minimiza bem!
    let animandoAtaque = 0;
    const TimerHeroi = setInterval(() => {
            if(animandoAtaque === 15){
                animandoAtaque = 0;
            }
            document.getElementById("imgHeroiCacheAtacando").style.backgroundImage = `url(${Herois.modelo}/Atacando/${animandoAtaque}.png)`
            document.getElementById("imgInimigoCacheAtacando").style.backgroundImage = `url(imgs/inimigos/${Inimigos[InimigosMortos].dificuldade}/${Inimigos[InimigosMortos].inimigo}/Atacando/${animandoAtaque}.png)`;
            document.getElementById("imgInimigoCacheDerrotado").style.backgroundImage = `url(imgs/inimigos/${Inimigos[InimigosMortos].dificuldade}/${Inimigos[InimigosMortos].inimigo}/Derrotado/${animandoAtaque}.png)`;
            document.getElementById("imgHeroiCacheDerrotado").style.backgroundImage = `url(${Herois.modelo}/Derrotado/${animandoAtaque}.png)`
            animandoAtaque++
        }, 60);
}

function colisao(a, b){

        const A = a.getBoundingClientRect();
        const B = b.getBoundingClientRect();
        return !(
        A.right < B.left ||
        A.left > B.right ||
        A.bottom < B.top ||
        A.top > B.bottom
        );

}

document.addEventListener("keydown", ApertouTecla => {

    if(ApertouTecla.key.charCodeAt(0) == 32 && iniciarBatalhaFlag == false){ //Inica o jogo!
            console.log(ApertouTecla.key);
            iniciarBatalha(true);
    }

    if(iniciarBatalhaFlag === true){
        if(ApertouTecla.key.charCodeAt(0) >= 97 && ApertouTecla.key.charCodeAt(0) <= 90 || ApertouTecla.key.charCodeAt(0) >= 65 && ApertouTecla.key.charCodeAt(0)){ //Verificando se apertou de a - z de acordo com a tabela ASCII! 
        // Metodo charCodeAt() pega a String e verifica de acordo com a numero na ASCII! charCodeAt(0) -> 0 Porque queremos a primeira Letra da String!
            Herois.ataque(ApertouTecla.key.toLowerCase().charCodeAt(0));
        } 
    }
})

















