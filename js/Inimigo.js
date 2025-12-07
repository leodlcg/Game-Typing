class Inimigo{

    constructor(vida, modelo, dano, QuantidadeAtaquesFeitos, estado, VelocidadeMin, VelocidadeMax, Inimigo, Dificuldade){
    this.vida = vida;
    this.modelo = modelo;
    this.dano = dano;
    this.QuantidadeAtaquesFeitos = QuantidadeAtaquesFeitos;
    this.estado = estado;
    this.VelocidadeMin = VelocidadeMin; //ms
    this.VelocidadeMax = VelocidadeMax; //ms
    this.inimigo = Inimigo;
    this.dificuldade = Dificuldade;

        //Mostrar a quantidade de vida na tela:

        switch(this.modelo){ //MODELO PARA O ATAQUE!
            case 1:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Facil/Skeleton/Atacando/Base.png)`;
                this.inimigo = `Skeleton`;
                this.dificuldade = `Facil`;
            break;
            case 2:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Facil/Ogre/Atacando/Base.png)`;
                this.inimigo = `Ogre`;
                this.dificuldade = `Facil`;
            break;
            case 3:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Facil/Undead/Atacando/Base.png)`;
                this.inimigo = `Undead`;
                this.dificuldade = `Facil`;
            break;
            case 4:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Medio/Skeleton/Atacando/Base.png)`;
                this.inimigo = `Skeleton`;
                this.dificuldade = `Medio`;
            break;
            case 5:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Medio/Ogre/Atacando/Base.png)`;
                this.inimigo = `Ogre`;
                this.dificuldade = `Medio`;
            break;
            case 6:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Medio/Undead/Atacando/Base.png)`;
                this.inimigo = `Undead`;
                this.dificuldade = `Medio`;
             break;
             case 7:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Dificil/Skeleton/Atacando/Base.png)`;
                this.inimigo = `Skeleton`;
                this.dificuldade = `Dificil`;
            break;
            case 8:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Dificil/Ogre/Atacando/Base.png)`;
                this.inimigo = `Ogre`;
                this.dificuldade = `Dificil`;
            break;
            case 9:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Dificil/Undead/Atacando/Base.png)`;
                this.inimigo = `Undead`;
                this.dificuldade = `Dificil`;
            break;
            case 10:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Boss/Undead/Atacando/Base.png)`;
                this.inimigo = `Skeleton`;
                this.dificuldade = `Boss`;
            break;
            case 11:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Boss/Undead/Atacando/Base.png)`;
                this.inimigo = `Ogre`;
                this.dificuldade = `Boss`;
            break;
            case 12:
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/Boss/Undead/Atacando/Base.png)`;
                this.inimigo = `Undead`;
                this.dificuldade = `Boss`;
            break;
        }
    }

    ataque(){
        let PrimeiroAtaque = true;
        this.animarVidas();
        this.acompanharAtaques(); //Fora do timer!

        if(PrimeiroAtaque === true){ //IF PARA DAR O PRIMEIRO ATAQUE SER LOGO DEPOIS DO TEMPO DO LOADING!
                PrimeiroAtaque = false;
                const TimerPrimeiroAtaque = setInterval(() => {
                        this.animarAtaque();
                        Teclas[0].mostrarTecla(0);
                        this.QuantidadeAtaquesFeitos += 1;
                        clearInterval(TimerPrimeiroAtaque);
                }, 2500) //2.5 segundos.
            }

        const TimerAtaque = setInterval(() => {
            const TimerAtaqueAleatorio = setInterval(() => {
                if(this.estado == "morto" || Herois.estado == "morto"){
                    this.QuantidadeAtaquesFeitos = 0;
                    clearInterval(TimerAtaque);
                }

                if(this.QuantidadeAtaquesFeitos == QuantidadeMaxTelas){
                    this.QuantidadeAtaquesFeitos = 0;
                }

                reporTeclas();

                if(this.estado === "vivo" && Herois.estado === "vivo"){
                    this.animarAtaque();
                    Teclas[this.QuantidadeAtaquesFeitos].mostrarTecla(this.QuantidadeAtaquesFeitos);
                    console.log("ATACAR");
                    this.QuantidadeAtaquesFeitos += 1;
                }
                clearInterval(TimerAtaqueAleatorio);
            }, Math.floor(Math.random() * ((this.VelocidadeMax - this.VelocidadeMin + 1)) + this.VelocidadeMin)) //Velocidade de ataque aleatoria PARA ENTRE ATAQUES com ValorMenor = Mais rapida e ValorMaior = Mais devagar!

        }, Math.floor(Math.random() * ((this.VelocidadeMax - this.VelocidadeMin + 1)) + this.VelocidadeMin)) //Velocidade de ataque aleatoria com ValorMenor = Mais rapida e ValorMaior = Mais devagar!

    }

    acompanharAtaques(){

        const HitBox = setInterval(() => {

            if(this.estado == "morto" || Herois.estado == "morto"){
                for(let i = 0; i < QuantidadeMaxTelas; i++){
                    if(Teclas[i] === "Vazio"){
                        continue;
                    }else{
                        Teclas[i].teclaMorta(i);
                    }
                }
                clearInterval(HitBox);
            }

            const heroi = document.getElementById("imgHeroiHitBox");

            for(let i = 0; i < QuantidadeMaxTelas; i++){
                if(colisao(heroi, document.getElementById(`imgTecla${i}`))){
                    console.log("Bateu no Heroi");
                    Teclas[i].teclaMorta(i, `imgTeclaMorteHeroi`);
                    Herois.receberDano(this.dano);
                    //fazer mais alguma coisa;
                }
            }
        }, 16)  //~60frames
    }


    receberDano(DanoRecebido){
        this.vida -= DanoRecebido;
        if(this.vida <= 0){ //Inimigo morreu
            document.getElementById(`imgVidaInimigo1`).style.opacity = "0%";
            this.estado = "morto";
            this.animarMorte();
            InimigosMortos += 1;
        }else{
            if(this.vida <= 10 && this.vida > 9){
                document.getElementById(`imgVidaInimigo10`).style.opacity = `${(100 - ((10 - this.vida) * 100))}%`; //Equacao para ir diminuindo a vida aos poucos!
                return;
            }else if(this.vida <= 9 && this.vida > 8){
                document.getElementById(`imgVidaInimigo10`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo9`).style.opacity = `${(100 - ((9 - this.vida) * 100))}%`;
                return;
            }else if(this.vida <= 8 && this.vida > 7){
                document.getElementById(`imgVidaInimigo10`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo9`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo8`).style.opacity = `${(100 - ((8 - this.vida) * 100))}%`;
                return;
            }else if(this.vida <= 7 && this.vida > 6){
                document.getElementById(`imgVidaInimigo10`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo9`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo8`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo7`).style.opacity = `${(100 - ((7 - this.vida) * 100))}%`;
                return;
            }else if(this.vida <= 6 && this.vida > 5){
                document.getElementById(`imgVidaInimigo10`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo9`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo8`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo7`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo6`).style.opacity = `${(100 - ((6 - this.vida) * 100))}%`;
                return;
            }else if(this.vida <= 5 && this.vida > 4){
                document.getElementById(`imgVidaInimigo10`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo9`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo8`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo7`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo6`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo5`).style.opacity = `${(100 - ((5 - this.vida) * 100))}%`;
                return;
            }else if(this.vida <= 4 && this.vida > 3){
                document.getElementById(`imgVidaInimigo10`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo9`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo8`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo7`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo6`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo5`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo4`).style.opacity = `${(100 - ((4 - this.vida) * 100))}%`;
                return;
            }else if(this.vida <= 3 && this.vida > 2){
                document.getElementById(`imgVidaInimigo10`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo9`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo8`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo7`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo6`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo5`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo4`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo3`).style.opacity = `${(100 - ((3 - this.vida) * 100))}%`;
                return;
            }else if(this.vida <= 2 && this.vida > 1){
                document.getElementById(`imgVidaInimigo10`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo9`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo8`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo7`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo6`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo5`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo4`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo3`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo2`).style.opacity = `${(100 - ((2 - this.vida) * 100))}%`;
                return;
            }else if(this.vida <= 1 && this.vida > 0){
                document.getElementById(`imgVidaInimigo10`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo9`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo8`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo7`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo6`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo5`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo4`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo3`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo2`).style.opacity = `0%`;
                document.getElementById(`imgVidaInimigo1`).style.opacity = `${(100 - ((1 - this.vida) * 100))}%`;
                return;
            }
        }
    }

    animarVidas(){
        for(let i = 1; i <= this.vida; i++){
            document.getElementById(`imgVidaInimigo${i}`).style.opacity = "100%";
        }
        
    }



    animarMorte(){

        let acumuladorImgMorte = 0;
        const timerMorte = setInterval(() => {
            document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/${this.dificuldade}/${this.inimigo}/Derrotado/${acumuladorImgMorte}.png)`;
            if(acumuladorImgMorte === 15){ //15 frames e o maximo que qualquer inimigo pode ter!
                inicarRound("ProximoRound");
                clearInterval(timerMorte);
                acumuladorImgMorte = 0;
            }else{
                acumuladorImgMorte += 1;
            }
        },60) //1 segundo entre as imagens de morte!
    }

    animarAtaque(){
        let acumuladorImgAtaque = 0;
        if (acumuladorImgAtaque > 0) return;  

        const timerMorte = setInterval(() => {
            document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/${this.dificuldade}/${this.inimigo}/Atacando/${acumuladorImgAtaque}.png)`;
            if(acumuladorImgAtaque === 15){ //14 frames e o maximo que qualquer inimigo pode ter!
                document.getElementById("imgInimigo").style.backgroundImage = `url(../imgs/inimigos/${this.dificuldade}/${this.inimigo}/Atacando/Base.png)`;
                acumuladorImgAtaque = 0;
                clearInterval(timerMorte);
            }else{
                acumuladorImgAtaque += 1;
            }
        },60) //60fps
    }

    ajustarCSSInimigo(){
        let aux;
        switch(this.modelo){ //MODELO PARA O ATAQUE!
            case 1: //Skeleton Facil
                aux =document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
            case 2:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
            case 3:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
            case 4:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
            case 5:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
            case 6:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
             break;
             case 7:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
            case 8:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
            case 9:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
            case 10:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
            case 11:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
            case 12:
                aux = document.getElementById("imgInimigo").style; aux.bottom="1.2vw"; aux.right="0.3vw"; aux.width="10vw"; aux.height="10vw";
                this.ajustarCSSVidaInimigo(9); //Valor do bottom para VidaInimigo01
            break;
        }
    }

    ajustarCSSVidaInimigo(bottom){
        let acumulador = bottom;
        for(let i = 1; i <= this.vida; i++){
            document.getElementById(`imgVidaInimigo${i}`).style.bottom = `${acumulador}vw`;
            acumulador++;
        }

    }

    ajustesCSS(){
        this.animarAtaque();
        this.ajustarCSSInimigo();
    }

}