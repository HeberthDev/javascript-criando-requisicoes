import { conectaAPI } from "./conectaAPI.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

    console.log(busca);
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento));