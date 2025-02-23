function togglemode() {
  const button = document.querySelector("#switch button");
  button.addEventListener("touchstart", togglemode);
  button.addEventListener("click", togglemode);

  //const html = document.documentElement

  //if (html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //    html.classList.add('light')

  // html.classList.toggle("light")
}
