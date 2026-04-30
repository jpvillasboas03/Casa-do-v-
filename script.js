const caixaTexto = document.querySelector(".caixa-texto");
const botaoEnviar = document.querySelector(".enviar-erva");
const respostaIa = document.querySelector(".resposta-ia");

botaoEnviar.addEventListener("click", responderErva);

caixaTexto.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        responderErva();
    }
});

function responderErva() {
    const erva = caixaTexto.value.trim().toLowerCase();

    if (erva === "") {
        respostaIa.innerText = "Digite o nome de uma erva para eu responder.";
        return;
    }

    respostaIa.innerText = "Consultando os conhecimentos do Vô IA...";

    setTimeout(() => {
        respostaIa.innerText = gerarResposta(erva);
    }, 800);
}

function gerarResposta(erva) {
    const respostas = {
        "arruda": "A arruda é muito conhecida para limpeza espiritual, proteção e descarrego de energias negativas.\n\nUse com respeito e cuidado, pois é uma erva forte.",
        
        "guiné": "A guiné é usada em trabalhos de limpeza, proteção e quebra de demandas espirituais.\n\nÉ uma erva muito ligada à defesa energética.",
        
        "alecrim": "O alecrim é usado para trazer ânimo, clareza, alegria e boas energias.\n\nTambém é muito associado à elevação espiritual.",
        
        "manjericão": "O manjericão é usado para harmonização, prosperidade, equilíbrio e abertura de caminhos.",
        
        "espada de são jorge": "A espada de São Jorge é muito usada para proteção espiritual, corte de energias ruins e defesa do ambiente.",
        
        "folha de pitangueira": "A folha de pitangueira pode ser associada à limpeza, equilíbrio e renovação das energias.\n\nÉ uma erva usada com intenção de leveza e fortalecimento espiritual.",
        
        "boldo": "O boldo é muito usado para limpeza espiritual, descarrego e também é conhecido popularmente pelo uso digestivo.\n\nNa espiritualidade, costuma ser visto como uma erva de purificação.",
        
        "hortelã": "A hortelã é associada à renovação, frescor, equilíbrio e boas vibrações.\n\nTambém pode ser usada para trazer clareza e leveza.",
        
        "levante": "O levante é usado para levantar energia, fortalecer o ânimo e abrir caminhos.\n\nÉ uma erva muito associada à força e movimento.",
        
        "comigo ninguém pode": "Comigo-ninguém-pode é muito conhecida como planta de proteção para ambientes.\n\nAtenção: é uma planta tóxica e não deve ser ingerida nem manipulada sem cuidado."
    };

    if (respostas[erva]) {
        return respostas[erva];
    }

    return `Sobre "${erva}", eu ainda não tenho uma resposta específica cadastrada.

Mas, de forma geral, cada erva deve ser usada com respeito, intenção correta e cuidado.

Procure sempre orientação de alguém experiente antes de usar ervas em banhos, defumações ou trabalhos espirituais.`;
}