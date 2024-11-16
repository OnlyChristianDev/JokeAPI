const jokes = [
    "Por que os químicos são ótimos em resolver problemas? Porque eles têm todas as soluções!",
    "Por que o desenvolvedor faliu? Porque ele usou todo o seu cache.",
    "Você já ouviu falar do cara que roubou o calendário? Ele pegou 12 meses!",
    "O que ganha o melhor dentista do mundo? Uma pequena placa.",
    "Meus professores me disseram que eu nunca seria muito porque procrastino muito. Eu disse a eles: 'Esperem para ver!'",
    "Minha memória ficou tão ruim que realmente me fez perder o emprego. Ainda estou empregado. Só não consigo lembrar onde.",
    "Quando em uma candidatura a emprego perguntam quem deve ser notificado em caso de emergência, sempre escrevo: 'Um médico muito bom'.",
    "Por que o médico está sempre calmo? Porque ele tem muitos pacientes.",
    "Por que o livro de matemática parece tão triste? Por causa de todos os seus problemas.",
    "Qual é a comida favorita de um lobisomem? Lobisomens não são reais.",
    "Como chamar um cão mágico? Um Labracadabrador.",
    "Por que os pássaros voam para climas mais quentes no inverno? É muito mais fácil do que caminhar!",
    "Seja como um próton. Sempre seja positivo.",
    "Que tipo de carro o Yoda dirige? Toyoda.", 
    "O que o zero diz a um oito? Cinto legal.",
    "Quantos profissionais de marketing são necessários para arrumar uma lâmpada? Nenhum, eles já automatizaram o processo.",
    "Quer ouvir uma piada sobre o potássio? K.",
    "O que você faz quando suas piadas sobre ciência não tem graça? Continue tentando até conseguir uma reação.",
    "Por que o dinossauro atravessou a rua? Porque as galinhas ainda não existiam!",
    "O que um pato subatômico diz? Quark.",
    "O que o Oceano Atlântico disse ao Oceano Índico? 'Experimente e seja mais Pacífico!'",
    "Um homem entra em uma biblioteca e pede ao bibliotecário livros sobre paranóia. O bibliotecário sussurra: 'Eles estão bem atrás de você!'",
    "Por que os coalas não contam como ursos? Eles não têm as coalificações certas.",
    "Algumas pessoas comem caracóis. Eles não devem gostar de fast food.",
    "Como você chama uma pilha de gatinhos? Um meowntanha.",
    "O que fica mais úmido quanto mais seca? Uma toalha.",
    "Eu tenho uma piada sobre viagem no tempo, mas não vou contar. Vocês não gostaram.",
    "Alguém conhece uma boa piada sobre o sódio? R: Na…",
    "Como você chama o monstro mais inteligente de todos? FrankEinstein.",
    "Você ouviu sobre todos os significados ocultos do Rei Leão? Sim, está cheio de simbalismo."
];

const aleatoryNumberFunction = (min : number, max : number) => {
  return Math.floor(Math.random() * (max - min - 1) - min)
}

const setJokes = () => {
  if (jokes.length > 0){
    const aleatoryNumber = aleatoryNumberFunction(0, jokes.length - 1)
    const joke = jokes[aleatoryNumber]
    jokes.splice(aleatoryNumber, 1)
    return joke
  } else {
    window.alert("ARRAY VAZIO")
  }
}
export async function GET() {
  const joke = setJokes()
    return new Response(JSON.stringify(joke), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }