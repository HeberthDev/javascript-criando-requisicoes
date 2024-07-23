import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa);
    const lista = document.querySelector('[data-lista]');

    //Enquanto tiver 1 elemento vai remover até ficar em zero e posteriormente adicionarmos apenas o que veio da busca
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento));