document.addEventListener("DOMContentLoaded", function () {
    const caixaTexto = document.querySelector(".caixa-texto");
    const botaoEnviar = document.querySelector(".enviar-erva");
    const respostaIa = document.querySelector(".resposta-ia");

    if (!caixaTexto || !botaoEnviar || !respostaIa) {
        console.error("Erro: algum elemento não foi encontrado no HTML.");
        return;
    }

    botaoEnviar.addEventListener("click", function () {
        responderErva();
    });

    caixaTexto.addEventListener("keydown", function (event) {
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

        setTimeout(function () {
            respostaIa.innerText = gerarResposta(erva);
        }, 800);
    }

    function gerarResposta(erva) {
        const respostas = {
            "arruda": "A arruda é muito conhecida para limpeza espiritual, proteção e descarrego de energias negativas.",
            "guiné": "A guiné é usada em trabalhos de limpeza, proteção e quebra de demandas espirituais.",
            "alecrim": "O alecrim é usado para trazer ânimo, clareza, alegria e boas energias.",
            "manjericão": "O manjericão é usado para harmonização, prosperidade, equilíbrio e abertura de caminhos.",
            "espada de são jorge": "A espada de São Jorge é muito usada para proteção espiritual e defesa do ambiente.",
            "folha de pitangueira": "A folha de pitangueira pode ser associada à limpeza, equilíbrio e renovação das energias.",
            "boldo": "O boldo é muito usado para limpeza espiritual e descarrego.",
            "hortelã": "A hortelã é associada à renovação, frescor, equilíbrio e boas vibrações.",
            "levante": "O levante é usado para levantar energia, fortalecer o ânimo e abrir caminhos."
        };

        if (respostas[erva]) {
            return respostas[erva];
        }

        return `Sobre "${erva}", eu ainda não tenho uma resposta específica cadastrada.

Mas, de forma geral, cada erva deve ser usada com respeito, intenção correta e cuidado.`;
    }
});
