class Heroi{

    constructor(){

        this.vida = 3;
        this.modelo = Math.floor(Math.random() * 3) + 1;
        this.dano = Math.floor(Math.random() * 1) + 0.5;
        this.estado = "vivo";
        this.animandoAtaque = 0;

        switch(this.modelo){
            case 1:
                this.modelo = `imgs/herois/Guerreiro`
            break;
            case 2:
                this.modelo = `imgs/herois/Arqueiro`
            break;
            case 3:
                this.modelo = `imgs/herois/Mago`
            break;
        }
    }



    ataque(teclaApertada){
        if(this.estado === "vivo"){
            const target = document.getElementById("imgTarGet");
            this.animarAtaque();
            for(let i = 0; i < QuantidadeMaxTelas; i++){
                if(colisao(target, document.getElementById(`imgTecla${i}`))){
                    if(teclaApertada === Teclas[i].letra){
                        Inimigos[InimigosMortos].receberDano(this.dano);
                        Teclas[i].teclaMorta(i, `imgTeclaMorteTarGet`);
                        //fazer mais alguma coisa
                    }
                }   
            }
        }
    }

    receberDano(DanoRecebido){
        this.vida -= DanoRecebido;
        if(this.vida <= 0){ //Heroi morreu
            document.getElementById(`imgVidaHeroi01`).style.opacity = "0%";
            this.estado = "morto";
            this.animarMorte();
            InimigosMortos += 1;
        }else{
            if(this.vida <= 7 && this.vida > 6){
                document.getElementById(`imgVidaHeroi07`).style.opacity = `${(100 - ((7 - this.vida) * 100))}%`; //Equacao para ir diminuindo a vida aos poucos!
                return;
            }else if(this.vida <= 6 && this.vida > 5){
                 document.getElementById(`imgVidaHeroi07`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi06`).style.opacity = `${(100 - ((6 - this.vida) * 100))}%`;
                 return;
            }else if(this.vida <= 5 && this.vida > 4){
                 document.getElementById(`imgVidaHeroi07`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi06`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi05`).style.opacity = `${(100 - ((5 - this.vida) * 100))}%`;
                 return;
            }else if(this.vida <= 4 && this.vida > 3){
                 document.getElementById(`imgVidaHeroi07`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi06`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi05`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi04`).style.opacity = `${(100 - ((4 - this.vida) * 100))}%`;
                 return;
            }else if(this.vida <= 3 && this.vida > 2){
                 document.getElementById(`imgVidaHeroi07`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi06`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi05`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi04`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi03`).style.opacity = `${(100 - ((3 - this.vida) * 100))}%`;
                 return;
            }else if(this.vida <= 2 && this.vida > 1){
                 document.getElementById(`imgVidaHeroi07`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi06`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi05`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi04`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi03`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi02`).style.opacity = `${(100 - ((2 - this.vida) * 100))}%`;
                 return;
            }else if(this.vida <= 1 && this.vida > 0){
                 document.getElementById(`imgVidaHeroi07`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi06`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi05`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi04`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi03`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi02`).style.opacity = `0%`;
                 document.getElementById(`imgVidaHeroi01`).style.opacity = `${(100 - ((1 - this.vida) * 100))}%`;
                 return;
            }
        }
    }

    animarVidas(){
        for(let i = 1; i <= this.vida; i++){
            document.getElementById(`imgVidaHeroi0${i}`).style.opacity = "100%";
        }
        
    }

    animarMorte(){

        let acumuladorImgMorte = 0;
        const timerMorte = setInterval(() => {
            document.getElementById("imgHeroi").style.backgroundImage = `url(../${this.modelo}/Derrotado/${acumuladorImgMorte}.png)`;
            if(acumuladorImgMorte === 15){
                document.getElementById("imgHeroi").style.backgroundImage = `url(../${this.modelo}/Derrotado/${acumuladorImgMorte}.png)`;
                fimJogo(true);
                acumuladorImgMorte = 0;
                clearInterval(timerMorte);
            }else{
                acumuladorImgMorte += 1;
            }
        },60) 
    }


    animarAtaque(){
        if(this.animandoAtaque > 0) return;
        const timerMorte = setInterval(() => {
            document.getElementById("imgHeroi").style.backgroundImage = `url(../${this.modelo}/Atacando/${this.animandoAtaque}.png)`;
            if(this.animandoAtaque === 15){ //14 frames e o maximo que o heroi pode ter!
                document.getElementById("imgHeroi").style.backgroundImage = `url(../${this.modelo}/Atacando/Base.png)`;
                this.animandoAtaque = 0;
                clearInterval(timerMorte);
            }else{
                this.animandoAtaque += 1;
            }
        },60) //1 segundo entre as imagens de morte!`
    }


    ajustarCSSHeroi(){
        let aux;
        if(this.modelo === `imgs/herois/Guerreiro`){
            aux = document.getElementById("imgHeroi").style; aux.bottom ="1vw"; aux.right ="31.85vw"; aux.width ="12vw"; aux.height="12vw";
        }else if(this.modelo === `imgs/herois/Arqueiro`){
            aux = document.getElementById("imgHeroi").style; aux.bottom ="0.5vw"; aux.right ="32.1vw"; aux.width ="12vw"; aux.height="12vw";
        }else if(this.modelo === `imgs/herois/Mago`){
            aux = document.getElementById("imgHeroi").style; aux.bottom ="0.5vw"; aux.right ="32.5vw"; aux.width ="11vw"; aux.height="11vw";
        }
    }

    ajustesCSS(){
        this.animarAtaque();
        this.ajustarCSSHeroi();
        this.animarVidas();
    }


}