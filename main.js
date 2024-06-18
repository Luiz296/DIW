//API GitHub
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


//Repositórios JSON
const urlRepositorios = 'http://localhost:3000/repols'; // Ajustar URL ao fazer deploy para o Vercel
let repositorio = [];

fetch(urlRepositorios)
  .then(function(response) {
    return response.json();
  })
  .then(function(dados) {
    repositorio = dados;
    console.log('Dados carregados!');

    repositorio.forEach(function(repo) {
      if (repo.titulo === "DIW") {
        document.getElementById('DIW').textContent = repo.titulo;
        document.getElementById('DIW_descricao').textContent = repo.descricao;
        document.getElementById('DIW_imagem').src = repo.imagem;
      } else if (repo.titulo === "PC Match") {
        document.getElementById('PC').textContent = repo.titulo;
        document.getElementById('PC_descricao').textContent = repo.descricao;
        document.getElementById('PC_imagem').src = repo.imagem;
      } else if (repo.titulo === "CRUD") {
        document.getElementById('CRUD').textContent = repo.titulo;
        document.getElementById('CRUD_descricao').textContent = repo.descricao;
        document.getElementById('CRUD_imagem').src = repo.imagem;
      }
    });
  })
  .catch(function(error) {
    console.error('Erro ao carregar dados:', error);
  });

  
 

  

