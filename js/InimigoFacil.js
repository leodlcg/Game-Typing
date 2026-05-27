class InimigoFacil extends Inimigo {

    constructor() {

        const vida = Math.floor(Math.random() * 2) + 1;
        const modelo = Math.floor(Math.random() * 3) + 1;
        const dano = (Math.random() * 0.5) + 0.1; // dano real (float)
        const QuantidadeAtaquesFeitos = 0;
        const estado = "vivo";
        const VelocidadeMin = 1500; //ms
        const VelocidadeMax = 2000; //ms
        const Inimigo = `AindaNaoDefinido`;
        const Dificuldade = `AindaNaoDefinido`;

        super(vida, modelo, dano, QuantidadeAtaquesFeitos, estado, VelocidadeMin, VelocidadeMax, Inimigo, Dificuldade);
    }
}
