//JSON server rodando no Vercel - Acesse com CTRL + click
const urlBase = 'https://back-end-diw-gules.vercel.app/repols';

//Função que carrga dados do JSON 
function leDadosCards() {
    return fetch(urlBase)
        .then(response => {
            if (!response.ok) {
                throw new Error('Resposta da rede não está ok' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Existe um problema na operação Fetch:', error);
        });
}

//Função que carrega apenas um repositório pelo ID
function carregarReposito(){
    leDadosCards().then(repols =>{
        let imprime = '';
        let parms = new URLSearchParams (location.search)
        let id = parms.get ('id')
        let card = repols.find(elem => elem.id == id);
        if(card){
            imprime = `
             <h3>Repositório: ${card.titulo}</h3> 
        <div class="conteudo">
            <div class="divisao">
                <h5 class="titulo">Descrição</h5>
                <p>${card.descricao}</p>
            </div>
            <div class="divisao">
                <h5 class="titulo">Data de Criação</h5>
                <p>${card.data}</p>
            </div>
            <div class="divisao">
                <h5 class="titulo">Linguagem</h5>
                <p>${card.linguagem}</p>
            </div>
            <div class="divisao">
                <h5 class="titulo">Link de Acesso</h5>
                <p><a href="${card.link}">${card.link}</a></p>
            </div>

            <h5 class="titulo">Tópicos</h5>
            <div class="botao">
                <button>${card.topicos[0]}</button>
                <button>${card.topicos[1]}</button>
                <button>${card.topicos[2]}</button>
            </div>
        </div>
            `
        }
        document.getElementById('main').innerHTML = imprime;
    })
}

//Carrega as funções quando a página for carregada
window.onload = function (){
    carregarReposito();
}