class InimigoMedio extends Inimigo {

    constructor() {

        const vida = Math.floor(Math.random() * ((5 - 3 + 1)) + 3) // 3 - 5// Min 3 vidas Max 5
        const modelo = Math.floor(Math.random() * ((6 - 4 + 1)) + 4); // 4 - 6 // 3 Opcoes de inimigos medios!
        const dano = (Math.random() * 0.5) + 0.1; // dano real (float)
        const QuantidadeAtaquesFeitos = 0;
        const estado = "vivo";
        const VelocidadeMin = 1000; //ms
        const VelocidadeMax = 1500; //ms
        const Inimigo = `AindaNaoDefinido`;
        const Dificuldade = `AindaNaoDefinido`;

        super(vida, modelo, dano, QuantidadeAtaquesFeitos, estado, VelocidadeMin, VelocidadeMax, Inimigo, Dificuldade);
    }
}
