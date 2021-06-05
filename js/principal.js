const terror = ["O Exorcista", "O Iluminado, Psicose", "Invocação do Mal", "a ilha da fantasia", "o chalé", "ameaça profunda", "doutor sono", "hereditário", "o silencío", "a autópsia", "It", "jogo perigoso", " bird box", " corra", "Hereditário", "Invasão Zumbi 2: Península", "A Caçada"]
const comedia = ["Minha mãe é uma peça", "se beber não case", "as branquelas", "o virgem de 40 anos", "Convenção das Bruxas", "Jumanji 2", "Minha Mãe É uma Peça 3", "Detona Ralph 2", "Abominável", "O Poderoso Chefinho", "Os Croods", "A Bailarina", "Superbad", "Intocáveis",]
const btn = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

function findMovie(params) {
  localStorage.setItem('busca', params);
  window.location.href = "./pages/buscafilme.html";

}
btn.addEventListener('click', e => {

  navbar.classList.toggle('sidebar-open');

})
