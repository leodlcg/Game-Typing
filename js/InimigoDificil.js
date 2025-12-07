class InimigoDificil extends Inimigo {

    constructor() {

        const vida = Math.floor(Math.random() * ((7 - 5 + 1)) + 5); // 5 - 7// Min 5 vidas Max 7
        const modelo = Math.floor(Math.random() * ((9 - 7 + 1)) + 7); // 7 - 9 // 3 Opcoes de inimigos dificil!
        const dano = (Math.random() * 0.5) + 0.1; // dano real (float)
        const QuantidadeAtaquesFeitos = 0;
        const estado = "vivo";
        const VelocidadeMin = 500; //ms
        const VelocidadeMax = 1000; //ms
        const Inimigo = `AindaNaoDefinido`;
        const Dificuldade = `AindaNaoDefinido`;

        super(vida, modelo, dano, QuantidadeAtaquesFeitos, estado, VelocidadeMin, VelocidadeMax, Inimigo, Dificuldade);
    }
}
