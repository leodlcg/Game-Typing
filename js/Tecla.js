class Tecla{

    constructor(id){
        this.letra = Math.floor(Math.random() * ((122 - 97 + 1)) + 97); //Armazenando um numero da tecla de ataque de acordo com a ASCII de a-z
        this.modelo = `imgs/teclas/modelos/simples/${this.letra}.png`
        this.velocidade = Math.floor(Math.random() * ((3 - 1 + 1)) + 1);
        this.animacaoAtaque = ``;
        this.animacao = Math.floor(Math.random() * ((6 - 1 + 1)) + 1);
        this.id = id;
    }

    mostrarTecla(id){
        document.getElementById(`imgTecla${id}`).style.backgroundImage = `url(${this.modelo})`;
        document.getElementById(`imgTecla${id}`).style.display = "inline-block"; 
        if(Inimigos[InimigosMortos].modelo == 1){ //Skeleton

            document.getElementById(`imgTecla${id}`).classList.add(`animacaoimgTecla${Inimigos[InimigosMortos].dificuldade}${this.animacao}${this.velocidade}`);
            this.animacaoAtaque = `animacaoimgTeclaFacil`;

        }else if(Inimigos[InimigosMortos].modelo == 2){ //Ogre

            document.getElementById(`imgTecla${id}`).classList.add(`animacaoimgTecla${Inimigos[InimigosMortos].dificuldade}${this.animacao}${this.velocidade}`);
            this.animacaoAtaque = `animacaoimgTeclaFacil`;

        }else if(Inimigos[InimigosMortos].modelo == 3){ //Undead

            document.getElementById(`imgTecla${id}`).classList.add(`animacaoimgTecla${Inimigos[InimigosMortos].dificuldade}${this.animacao}${this.velocidade}`);
            this.animacaoAtaque = `animacaoimgTeclaFacil`;

        }else if(Inimigos[InimigosMortos].modelo == 4){ //Skeleton

            document.getElementById(`imgTecla${id}`).classList.add(`animacaoimgTecla${Inimigos[InimigosMortos].dificuldade}${this.animacao}${this.velocidade}`);
            this.animacaoAtaque = `animacaoimgTeclaMedio`;

        }else if(Inimigos[InimigosMortos].modelo == 5){ //Skeleton

            document.getElementById(`imgTecla${id}`).classList.add(`animacaoimgTecla${Inimigos[InimigosMortos].dificuldade}${this.animacao}${this.velocidade}`);
            this.animacaoAtaque = `animacaoimgTeclaMedio`;

        }else if(Inimigos[InimigosMortos].modelo == 6){ //Ogre

            document.getElementById(`imgTecla${id}`).classList.add(`animacaoimgTecla${Inimigos[InimigosMortos].dificuldade}${this.animacao}${this.velocidade}`);
            this.animacaoAtaque = `animacaoimgTeclaMedio`;

        }else if(Inimigos[InimigosMortos].modelo == 7){ //Skeleton

            document.getElementById(`imgTecla${id}`).classList.add(`animacaoimgTecla${Inimigos[InimigosMortos].dificuldade}${this.animacao}${this.velocidade}`);
            this.animacaoAtaque = `animacaoimgTeclaDificil`;

        }else if(Inimigos[InimigosMortos].modelo == 8){ //Ogre

            document.getElementById(`imgTecla${id}`).classList.add(`animacaoimgTecla${Inimigos[InimigosMortos].dificuldade}${this.animacao}${this.velocidade}`);
            this.animacaoAtaque = `animacaoimgTeclaDificil`;

        }else if(Inimigos[InimigosMortos].modelo == 9){ //Undead

            document.getElementById(`imgTecla${id}`).classList.add(`animacaoimgTecla${Inimigos[InimigosMortos].dificuldade}${this.animacao}${this.velocidade}`);
            this.animacaoAtaque = `animacaoimgTeclaDificil`;

        }else{
            console.log("To retornando aqui")
        }



    }

    teclaMorta(id, ondeMorreu){
        this.animarMorte(ondeMorreu);
        document.getElementById(`imgTecla${id}`).style.display = "none";
        document.getElementById(`imgTecla${id}`).classList.remove(`${this.ataque}${this.animacao}${this.velocidade}`);
        Teclas[id] = "Vazio";
    }

    
    animarMorte(ondeMorreu) {
        let acumuladorImgMorte = 0;

        const explodir = document.getElementById(ondeMorreu);
        if (!explodir) return;

        const timerMorte = setInterval(() => {
            if (acumuladorImgMorte === 5) {
                explodir.style.display = "none";
                clearInterval(timerMorte);
            } else {
                explodir.style.display = "inline-block";
                explodir.style.backgroundImage = `url(imgs/explosoes/amarelo/Explosao${acumuladorImgMorte}.png)`;
                acumuladorImgMorte++;
            }
        }, 120);
    }
}







