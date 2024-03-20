// Função para atualizar a hora
function updateTime() {
    // Obter a hora atual
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // Formatar a hora
    const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  
    document.getElementById("clock").textContent = formattedTime;
  }
  // Atualizar a hora a cada segundo
  setInterval(updateTime, 1000);
  
  updateTime();
  