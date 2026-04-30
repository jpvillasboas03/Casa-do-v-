let botao = document.querySelector(".enviar-erva");

async function perguntarErva() {
    let textoUsuario = document.querySelector(".caixa-texto").value;
    let respostaIA = document.querySelector(".resposta-ia");

    if (textoUsuario.trim() === "") {
        respostaIA.innerText = "Digite o nome de uma erva primeiro.";
        return;
    }

    respostaIA.innerText = "Buscando informação em Aruanda...";

    try {
        let resposta = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mensagem: textoUsuario
            })
        });

        let dados = await resposta.json();

        if (!resposta.ok) {
            respostaIA.innerText = "Erro ao buscar resposta da IA.";
            console.log(dados);
            return;
        }

        respostaIA.innerText = dados.resposta;

    } catch (erro) {
        console.log(erro);
        respostaIA.innerText = "Erro ao conectar com a IA.";
    }
}

botao.addEventListener("click", perguntarErva);
