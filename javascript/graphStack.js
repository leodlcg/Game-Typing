  /* ══════════════════════════════════════════
     Base de dados de cada palavra
     Adicione ou edite entradas livremente.
  ══════════════════════════════════════════ */
  const words = {
    dados: {
      title: "Dados",
      color: "#4a9eff",
      desc: "Conjunto bruto de fatos, números ou textos que, quando processados e organizados, geram informação. A base de toda decisão orientada por evidências.",
      tags: ["#bigdata", "#analytics", "#database"]
    },
    inovacao: {
      title: "Inovação",
      color: "#28c840",
      desc: "Processo de introduzir algo novo — um produto, serviço ou modelo — que gera valor real. Em tech, é o motor por trás de cada disruptção de mercado.",
      tags: ["#startup", "#produto", "#disruption"]
    },
    codigo: {
      title: "Código",
      color: "#b48eff",
      desc: "Instruções escritas em uma linguagem de programação que a máquina executa. É a forma como ideias viram software funcional.",
      tags: ["#dev", "#python", "#javascript"]
    },
    algoritmo: {
      title: "Algoritmo",
      color: "#febc2e",
      desc: "Sequência finita de passos bem definidos para resolver um problema. É a lógica central por trás de ordenações, buscas, compressão e IA.",
      tags: ["#CS", "#lógica", "#complexidade"]
    },
    machine: {
      title: "Machine Learning",
      color: "#ff6e6e",
      desc: "Subárea da IA onde modelos aprendem padrões a partir de dados sem serem explicitamente programados. Base de sistemas como LLMs, visão computacional e recomendação.",
      tags: ["#AI", "#ML", "#redes-neurais"]
    },
    api: {
      title: "API",
      color: "#4a9eff",
      desc: "Application Programming Interface — contrato que define como dois sistemas se comunicam. Permite que diferentes aplicações troquem dados de forma padronizada.",
      tags: ["#REST", "#GraphQL", "#integração"]
    },
    deploy: {
      title: "Deploy",
      color: "#28c840",
      desc: "Processo de disponibilizar uma aplicação em ambiente de produção, tornando-a acessível aos usuários finais. Inclui build, testes e publicação.",
      tags: ["#CI/CD", "#DevOps", "#produção"]
    },
    backend: {
      title: "Backend",
      color: "#b48eff",
      desc: "Camada do sistema responsável pela lógica de negócio, processamento de dados e comunicação com bancos de dados. Invisível ao usuário, mas fundamental.",
      tags: ["#servidor", "#Node", "#Python"]
    },
    frontend: {
      title: "Frontend",
      color: "#febc2e",
      desc: "Parte da aplicação com a qual o usuário interage diretamente — interface, layout, animações. Construído com HTML, CSS e JavaScript.",
      tags: ["#UI", "#React", "#UX"]
    },
    infra: {
      title: "Infraestrutura",
      color: "#4ad9b4",
      desc: "Conjunto de servidores, redes, armazenamento e serviços que suportam o funcionamento das aplicações. Em cloud, é gerenciada como código (IaC).",
      tags: ["#IaC", "#Terraform", "#cloud"]
    },
    aprendizado: {
      title: "Aprendizado",
      color: "#4ad9b4",
      desc: "No contexto de ML, capacidade de um modelo ajustar seus parâmetros com base em dados de treino para minimizar erros e melhorar predições.",
      tags: ["#treinamento", "#otimização", "#épocas"]
    },
    loop: {
      title: "Loop",
      color: "#ff6e6e",
      desc: "Estrutura de repetição que executa um bloco de código enquanto uma condição é verdadeira. Elemento fundamental em lógica de programação.",
      tags: ["#for", "#while", "#iteração"]
    },
    async: {
      title: "Async",
      color: "#4a9eff",
      desc: "Programação assíncrona permite que tarefas lentas (I/O, rede) sejam executadas sem bloquear a thread principal. Essencial para performance em JS e Python.",
      tags: ["#await", "#promises", "#concorrência"]
    },
    cloud: {
      title: "Cloud",
      color: "#28c840",
      desc: "Modelo de computação onde recursos (servidores, storage, rede) são entregues pela internet sob demanda. AWS, GCP e Azure dominam o mercado.",
      tags: ["#AWS", "#GCP", "#Azure"]
    },
    server: {
      title: "Server",
      color: "#b48eff",
      desc: "Máquina ou processo que fornece serviços a outros sistemas (clientes). Pode ser físico, virtual ou serverless — sem estado de máquina exposto.",
      tags: ["#HTTP", "#TCP", "#hosting"]
    },
    pipeline: {
      title: "Pipeline",
      color: "#febc2e",
      desc: "Sequência automatizada de etapas — build, teste, análise, deploy — que transforma código em software entregue. Coração do CI/CD moderno.",
      tags: ["#GitHub Actions", "#Jenkins", "#CI/CD"]
    },
    kernel: {
      title: "Kernel",
      color: "#ff6e6e",
      desc: "Núcleo do sistema operacional que gerencia hardware, memória e processos. É a camada mais privilegiada do sistema e media todo acesso ao hardware.",
      tags: ["#Linux", "#OS", "#syscall"]
    },
    runtime: {
      title: "Runtime",
      color: "#4a9eff",
      desc: "Ambiente de execução onde o código roda. Fornece alocação de memória, garbage collection e bibliotecas padrão. Ex: JVM, V8, CPython.",
      tags: ["#JVM", "#V8", "#execução"]
    },
    docker: {
      title: "Docker",
      color: "#28c840",
      desc: "Plataforma de containerização que empacota aplicações e suas dependências em unidades isoladas e portáveis. Revolucionou o fluxo de deploy moderno.",
      tags: ["#container", "#image", "#Kubernetes"]
    },
    node: {
      title: "Node.js",
      color: "#4ad9b4",
      desc: "Runtime JavaScript construído sobre o V8 do Chrome que permite executar JS no servidor. Famoso por sua arquitetura event-driven e non-blocking I/O.",
      tags: ["#JavaScript", "#npm", "#backend"]
    },
    query: {
      title: "Query",
      color: "#4ad9b4",
      desc: "Consulta feita a um banco de dados ou API para recuperar, filtrar ou manipular dados. Em SQL, é representada por SELECT, INSERT, UPDATE e DELETE.",
      tags: ["#SQL", "#banco", "#ORM"]
    },
    token: {
      title: "Token",
      color: "#b48eff",
      desc: "Unidade mínima de texto processada por LLMs — pode ser uma palavra, sílaba ou caractere especial. O custo de uso de APIs de IA é medido em tokens.",
      tags: ["#LLM", "#NLP", "#GPT"]
    },
    stack: {
      title: "Stack",
      color: "#ff6e6e",
      desc: "Conjunto de tecnologias usadas em um projeto (ex: MERN, LAMP). Também é uma estrutura de dados LIFO — Last In, First Out — essencial em algoritmos.",
      tags: ["#MERN", "#LIFO", "#tecnologia"]
    },
    cache: {
      title: "Cache",
      color: "#febc2e",
      desc: "Camada de armazenamento temporário de alta velocidade que guarda resultados já processados para evitar recomputação. Reduz latência drasticamente.",
      tags: ["#Redis", "#memória", "#performance"]
    },
    proxy: {
      title: "Proxy",
      color: "#28c840",
      desc: "Servidor intermediário entre o cliente e o destino final. Pode fazer balanceamento de carga, cache, autenticação e criptografia de tráfego.",
      tags: ["#Nginx", "#reverso", "#rede"]
    },
    microservices: {
      title: "Microservices",
      color: "#4a9eff",
      desc: "Arquitetura onde a aplicação é dividida em serviços pequenos e independentes, cada um responsável por uma função de negócio. Facilita escalabilidade e resiliência.",
      tags: ["#arquitetura", "#escala", "#API Gateway"]
    },
  };
 
  /* ══ Funções do Modal ══ */
  function open(id) {
    const data = words[id];
    if (!data) return;
 
    document.getElementById('modal-id').textContent    = `ID: #w-${id}`;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-title').style.color = data.color;
    document.getElementById('modal-desc').textContent  = data.desc;
    document.getElementById('modal-tag').textContent   = `// ${id}`;
    document.getElementById('modal-tag').style.color   = data.color;
 
    const tagsEl = document.getElementById('modal-tags');
    tagsEl.innerHTML = data.tags.map(t =>
      `<span class="modal-tag" style="color:${data.color};border-color:${data.color}33;background:${data.color}11">${t}</span>`
    ).join('');
 
    document.getElementById('modal-overlay').classList.add('active');
  }
 
  function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
  }
 
  function closeOnOverlay(e) {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  }
 
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });