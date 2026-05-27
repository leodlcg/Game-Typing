class InimigoBoss extends Inimigo {

    constructor() {

        const vida = Math.floor(Math.random() * ((10 - 7 + 1)) + 7);// Min 10 vidas Max 15
        const modelo = Math.floor(Math.random() * ((12 - 10 + 1)) + 10); // 10 - 12 // 3 Opcoes de inimigos boss!
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
