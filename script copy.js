function toggleMode() {
  const html = document.documentElement // Obtém o elemento <html>
  html.classList.toggle("dark-mode") // Alterna a classe para ativar o modo escuro

  // Atualiza o ícone ou botão se necessário
  const button = document.querySelector("#switch button")
}

// Adiciona o evento de clique corretamente
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#switch button")
  if (button) {
    button.addEventListener("click", toggleMode)
  }
})

//const html = document.documentElement

//if (html.classList.contains('light')) {
//  html.classList.remove('light')
//} else {
//    html.classList.add('light')

// html.classList.toggle("light")
