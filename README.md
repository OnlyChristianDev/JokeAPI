## 🎭 Projeto de Cartas Interativas com Piadas
Este é um projeto em Next.js que apresenta um sistema interativo de cartas que exibem piadas e suas respostas. Ao clicar nas cartas, elas giram, revelando a piada ou a resposta no verso. Além disso, o projeto consome uma API para obter as piadas dinamicamente.

## 📋 Funcionalidades
Animações interativas: Uso de Framer Motion para animações suaves de rotação das cartas.
Consumo de API: Piadas são carregadas dinamicamente a partir de uma API.
Cartas dinâmicas: Uma carta azul exibe a piada e outra carta vermelha exibe a resposta.
Sistema de alerta: Indica ao usuário quando clicar na carta para continuar a interação.
Gerador de piadas: Exibe uma nova piada a cada interação.

## 🚀 Tecnologias Utilizadas
React.js: Biblioteca principal para construção da interface.
Next.js: Framework para renderização no lado do servidor e gerenciamento de rotas.
Framer Motion: Biblioteca para animações de cartas.
Tailwind CSS: Framework CSS para estilização rápida e eficiente.
TypeScript: Adição de tipagem estática para maior robustez do código.


## 🔧 Como Funciona o Projeto
Carregamento das piadas:

O componente Jokes faz uma chamada à API /api/jokeapi para buscar as piadas.
Animação das cartas:

O componente Card utiliza Framer Motion para animar a rotação das cartas quando clicadas.
Lógica das piadas:

Uma piada e sua resposta são exibidas aleatoriamente ao clicar no botão "Mais uma".
Sistema de alerta:

Caso a carta azul ainda não tenha sido virada, a carta vermelha treme, indicando que o próximo passo é virar a carta azul.
