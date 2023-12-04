// Prompts
const prompts = [
  ["oi", "olá", "opa", "tudo bem?", "tudo bem", "alo", "ola"],
  ["sobre a empresa", "1", "sobre"],
  ["2", "serviços"],
  ["3", "funcionários"],
  ["4", "estou com problemas", "problemas", "problemas!"],
  ["8", "Nenhum desses problemas listados", "Nenhum desses", "Não ajudou", "Nenhum"]
]

// Respostas
const replies = [
  [
    "Olá! Eu sou o Robito e acompanharei a sua consulta! \n \n Sobre o que você quer falar?  \n \n 1 - Sobre a Empresa \n 2 - Serviços \n 3 - Funcionários \n 4 - Problemas!"
  ],
  [
    "A empresa TroubleShoot é uma empresa que promove chatbots para um melhor ambiente entre o cliente e a empresa!"
  ],
  [
    "Nós oferecemos chatbots personalizados para a sua empresa!"
  ],
  [
    "Nossos funcionários são: \n \nCarlos Vinícius \n Irys Rhose \n Isabele Larissa \n Jennifer Melanie "
  ],
  [
    "O seu problema se parece com algum desses aqui listado? \n\n 5 - Não consigo apertar o botão \n 6 - Não consigo digitar no input \n 7 - Estou tendo problemas com a plataforma \n 8 - Nenhum desses problemas listados "
  ],
  [
    "Iremos registrar a sua ocorrência para melhorar cada vez mais o nosso sistema!"
  ]
]

// Caso ele não ache nada
const alternative = [
  "Não consegui entender, pode tentar de novo, por favor?",
]
