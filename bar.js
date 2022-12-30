const bar = document.querySelector('#bar');
const button = document.querySelector('#button');
const buttondec = document.querySelector('#buttondec');
function decrement() {
  // Verifica se o valor atual da barra de progresso é menor que o valor máximo
  if (bar.value > 0) {
    bar.value--; // incrementa o valor da barra de progresso
  }
}

function increment () {
	if (bar.value < bar.max) {
  	bar.value++;
  }
}

// Adiciona um evento de clique ao botão
button.addEventListener('click', increment);
buttondec.addEventListener('click', decrement);
