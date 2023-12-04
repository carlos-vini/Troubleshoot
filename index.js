document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  // Remover espaços em branco e coloca tudo para letras minúsculas

  let text = input.toLowerCase().trim();
  text = text

  if (compare(prompts, replies, text)) { 
    // Procura o prompt
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else {
    // Se todos falharem vai para o texto alternativo
    product = alternative[0];
  }

  // Atualizar o DOM
  addChat(input, product);
}

// Verificar os prompts e enviar as respostas
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[0];
        replyFound = true;
        // Para o loop se encontrar o prompt
        break;
      }
    }
    if (replyFound) {
      // Parar o loop quando a resposta for encontrada para não percorrer o array inteiro
      break;
    }
  }
  return reply;
}

// Chat
function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Digitando...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Mostrar as mensagens mais recentes
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Delay
  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 500
  )

  console.log(input);

}

// Botão para abrir e fechar o chat

let btn = document.getElementById("btn");
let btnClose = document.getElementById("btnClose");
let chat = document.getElementById("chat");


btn.addEventListener("click", () =>{
  chat.style.display = "flex";
  btn.style.display = "none";
  btnClose.style.display = "flex"
});

btnClose.addEventListener("click", () =>{
  chat.style.display = "none";
  btn.style.display = "flex";
  btnClose.style.display = "none"
});

console.log( chat)
