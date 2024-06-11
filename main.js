//API GitHub
//Elementos da página inicial
fetch ('https://api.github.com/users/luiz296')
  .then(async res =>{
    if(!res.ok){
      throw new Error (res.status)
    }
    let data = await res.json();
    console.log(data)
    document.getElementById('name').innerHTML = data.name
    document.getElementById('name1').innerHTML = data.name
    document.getElementById('bio').innerHTML = data.bio
    document.getElementById ('loc').innerHTML = data.location 
    document.getElementById('avatar').innerHTML = `<img class="imagem" src="${data.avatar_url}">`
    document.getElementById('numrepol').innerHTML = `Repositórios (${data.public_repos})`
  })

