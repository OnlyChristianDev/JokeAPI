const jokes = [
  {
      joke: "Por que os químicos são ótimos em resolver problemas?",
      answer: "Porque eles têm todas as soluções!"
  },
  {
      joke: "Por que o desenvolvedor faliu?",
      answer: "Porque ele usou todo o seu cache."
  },
  {
      joke: "Você já ouviu falar do cara que roubou o calendário?",
      answer: "Ele pegou 12 meses!"
  },
  {
      joke: "Meus professores me disseram que eu nunca seria muito porque procrastino muito.",
      answer: "Eu disse a eles: 'Esperem para ver!'"
  },
  {
      joke: "Quando em uma candidatura a emprego perguntam quem deve ser notificado em caso de emergência, sempre escrevo:",
      answer: "'Um médico muito bom.'"
  },
  {
      joke: "Por que o médico está sempre calmo?",
      answer: "Porque ele tem muitos pacientes."
  },
  {
      joke: "Por que o livro de matemática parece tão triste?",
      answer: "Por causa de todos os seus problemas."
  },
  {
      joke: "Como chamar um cão mágico?",
      answer: "Um Labracadabrador."
  },
  {
      joke: "Por que os pássaros voam para climas mais quentes no inverno?",
      answer: "É muito mais fácil do que caminhar!"
  },
  {
      joke: "Seja como um próton.",
      answer: "Sempre seja positivo."
  },
  {
      joke: "Que tipo de carro o Yoda dirige?",
      answer: "Toyoda."
  },
  {
      joke: "O que o zero diz a um oito?",
      answer: "Cinto legal."
  },
  {
      joke: "O que o HTML disse ao CSS?",
      answer: "“Eu gosto do seu estilo!”"
  },
  {
      joke: "O que você faz quando suas piadas sobre ciência não têm graça?",
      answer: "Continue tentando até conseguir uma reação."
  },
  {
      joke: "Por que o dinossauro atravessou a rua?",
      answer: "Porque as galinhas ainda não existiam!"
  },
  {
      joke: "O que o Oceano Atlântico disse ao Oceano Índico?",
      answer: "'Experimente e seja mais Pacífico!'"
  },
  {
      joke: "Um homem entra em uma biblioteca e pede ao bibliotecário livros sobre paranóia.",
      answer: "O bibliotecário sussurra: 'Eles estão bem atrás de você!'"
  },
  {
      joke: "Por que os coalas não contam como ursos?",
      answer: "Eles não têm as coalificações certas."
  },
  {
      joke: "Algumas pessoas comem caracóis.",
      answer: "Eles não devem gostar de fast food."
  },
  {
      joke: "Como você chama uma pilha de gatinhos?",
      answer: "Um meowntanha."
  },
  {
      joke: "Como você chama o monstro mais inteligente de todos?",
      answer: "FrankEinstein."
  },
  {
      joke: "O que a parede disse para o teto?",
      answer: "“Eu te cubro!”"
  },
  {
      joke: "Por que os programadores não gostam da natureza?",
      answer: "Muitos bugs."
  },
  {
      joke: "Qual é o animal favorito do computador?",
      answer: "O mouse."
  },
  {
      joke: "Qual é a banda favorita dos físicos?",
      answer: "AC/DC."
  },
  {
      joke: "O que o neurônio disse ao outro neurônio?",
      answer: "“Você tá pensando o que eu tô pensando?”"
  },
  {
      joke: "Por que o computador foi ao médico?",
      answer: "Porque ele tinha um vírus!"
  },
  {
      joke: "Como o banco de dados se declarou para a tabela?",
      answer: "“Você é a chave primária do meu coração.”"
  },
  {
      joke: "Por que o químico não conseguia resolver o enigma?",
      answer: "Ele não tinha a solução."
  },
  {
      joke: "Qual é o café favorito do desenvolvedor?",
      answer: "Java."
  }
];

export async function GET() {
    return new Response(JSON.stringify(jokes), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }