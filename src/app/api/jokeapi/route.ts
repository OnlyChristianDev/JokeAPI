const jokes = [
    "Por que os químicos são ótimos em resolver problemas? Porque eles têm todas as soluções!",
    "Por que o desenvolvedor faliu? Porque ele usou todo o seu cache.",
    "Você já ouviu falar do cara que roubou o calendário? Ele pegou 12 meses!",
    "Meus professores me disseram que eu nunca seria muito porque procrastino muito. Eu disse a eles: 'Esperem para ver!'",
    "Quando em uma candidatura a emprego perguntam quem deve ser notificado em caso de emergência, sempre escrevo: 'Um médico muito bom'.",
    "Por que o médico está sempre calmo? Porque ele tem muitos pacientes.",
    "Por que o livro de matemática parece tão triste? Por causa de todos os seus problemas.",
    "Como chamar um cão mágico? Um Labracadabrador.",
    "Por que os pássaros voam para climas mais quentes no inverno? É muito mais fácil do que caminhar!",
    "Seja como um próton. Sempre seja positivo.",
    "Que tipo de carro o Yoda dirige? Toyoda.", 
    "O que o zero diz a um oito? Cinto legal.",
    "O que o HTML disse ao CSS? “Eu gosto do seu estilo!.",
    "O que você faz quando suas piadas sobre ciência não tem graça? Continue tentando até conseguir uma reação.",
    "Por que o dinossauro atravessou a rua? Porque as galinhas ainda não existiam!",
    "O que o Oceano Atlântico disse ao Oceano Índico? 'Experimente e seja mais Pacífico!'",
    "Um homem entra em uma biblioteca e pede ao bibliotecário livros sobre paranóia. O bibliotecário sussurra: 'Eles estão bem atrás de você!'",
    "Por que os coalas não contam como ursos? Eles não têm as coalificações certas.",
    "Algumas pessoas comem caracóis. Eles não devem gostar de fast food.",
    "Como você chama uma pilha de gatinhos? Um meowntanha.",
    "Como você chama o monstro mais inteligente de todos? FrankEinstein.",
    "O que a parede disse para o teto? “Eu te cubro!",
    "Por que os programadores não gostam da natureza? Muitos bugs.",
    "Qual é o animal favorito do computador? O mouse.",
    "Qual é a banda favorita dos físicos? AC/DC.",
    "O que o neurônio disse ao outro neurônio? “Você tá pensando o que eu tô pensando”",
    "Por que o computador foi ao médico? Porque ele tinha um vírus!",
    "Como o banco de dados se declarou para a tabela? “Você é a chave primária do meu coração.”",
    "Por que o químico não conseguia resolver o enigma? Ele não tinha a solução.",
    "Qual é o café favorito do desenvolvedor? Java."
];

export async function GET() {
    return new Response(JSON.stringify(jokes), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }