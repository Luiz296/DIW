//Acessa e exibe dados -- API GitHub
fetch('https://api.github.com/users/luiz296')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('name1').innerHTML = data.name;
    document.getElementById('bio').innerHTML = data.bio;
    document.getElementById('loc').innerHTML = data.location;
    document.getElementById('avatar').innerHTML = `<img class="imagem" src="${data.avatar_url}">`;
    document.getElementById('numrepol').innerHTML = `Repositórios (${data.public_repos})`;
  })
  .catch(error => console.error('Erro:', error));


//JSON server rodando no Vercel - Acesse com CTRL + click
const urlBase = 'https://back-end-diw-gules.vercel.app/'; 

// Função para carregar dados dos repositórios
function carregarRepositorios() {
  fetch(`${urlBase}repols`)
    .then(response => response.json())
    .then(dados => {
      const repositorio = dados;
      console.log('Dados carregados!');

        let imprime ='';
        for(let i = 0; i < dados.length; i++){
          let repo = dados[i]
          imprime += `
          <div class="col" >
          <a href="index2.html?id=${repo.id}" target="_blank" class="text-decoration-none">
        <div class="card">
          <img src="${repo.imagem}" class="card-img-top" alt="DIW">
          <div class="card-body">
            <h5 class="card-title alightext">${repo.titulo}</h5>
            <p class="card-text">${repo.descricao}</p>
              <i class="fa-regular fa-star">${repo.star}</i>
              <i class="fa-regular fa-user col-">${repo.view}</i>
              <i class="fa-solid fa-code-fork">${repo.fork}</i>
          </div>
        </div>
        </a>
        </div>
          `
        }
        document.getElementById('reposContainer').innerHTML = imprime;
      });
}
//Função para carregar Carrocel
function carregarCarrocel(){
  fetch(`${urlBase}carrocel`)
  .then(response => response.json())
  .then(dados =>{
    const carrocel = dados;
    console.log('Dados carregados!');
    
    let imprime = '';
    imprime = `
    <div id="carouselExampleCaptions" class="carousel slide conteudo" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
          aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
          aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${carrocel[0].img}" alt="${carrocel[0].categoria}" class="d-block w-100">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="${carrocel[1].img}" alt="${carrocel[1].categoria}" class="d-block w-100">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="${carrocel[2].img}" alt="${carrocel[2].categoria}" class="d-block w-100">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="${carrocel[3].img}" alt="${carrocel[3].categoria}" class="d-block w-100">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="${carrocel[4].img}" alt="${carrocel[4].categoria}" class="d-block w-100">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `
    document.getElementById('tudo').innerHTML = imprime;
  })
}
//Função para carregar colegas
function carregaColegas (){
  fetch(`${urlBase}colegas`)
  .then(response => response.json())
  .then(dados =>{
    console.log('Dados carregados!');
    let imprime = '';
    for (let i = 0; i < dados.length; i++){
      const colegas = dados[i];
      imprime += `
      <div class="col">
      <a href="${colegas.url}" class="text-decoration-none">
      <div class="card">
            <img src="${colegas.img}" class="card-img-top" alt="Colegas">
            <h5 class="nome">${colegas.nome}</h5>
          </div>
        </a>
        </div>
      `
    }
    document.getElementById("all").innerHTML = imprime;
  })
}
//Funções para scrollar a tela quando clicar nas seções
function scrollToSection() {
  var section = document.getElementById("numrepol");
  section.scrollIntoView({ behavior: "smooth" });
}
function scrollToSection2() {
  var section = document.getElementById("targetSection2");
  section.scrollIntoView({ behavior: "smooth" });
}
function scrollToSection3() {
  var section = document.getElementById("targetSection3");
  section.scrollIntoView({ behavior: "smooth" });
}


// Carregar dados ao iniciar a página
window.onload = function (){
  carregarRepositorios();
  carregarCarrocel();
  carregaColegas();
}


  

