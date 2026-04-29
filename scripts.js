let botao = document.querySelector(".enviar-erva");
let endereco = "https://api.groq.com/openai/v1/chat/completions";

async function perguntarErva() {
    let textoUsuario = document.querySelector(".caixa-texto").value;
    let respostaIA = document.querySelector(".resposta-ia");

    if (textoUsuario.trim() === "") {
        respostaIA.innerText = "Digite o nome de uma erva primeiro.";
        return;
    }

    respostaIA.innerText = "Buscando informação em Aruanda...";

    try {
        let resposta = await fetch(endereco, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: "Você é o Joaquim IA. Responda em português, de forma simples, explicando o uso da erva, faça isso em poucas linhas sendo direto e resumido, focando sempre unica e exclusivamente no uso das ervas para o ritual de umbanda, para que elas são usadas, de exemplos da erva em banhos, defumação, sua atuação, e possíveis combinações com outras ervas que podem acrescentar funções, se tiver alguma contra indicação seja alérgica ou tóxica avise. O usuário pode digitar a finalidade que ele precisa e você pesquisa e responde ervas e dicas de combinações que podem ajudar ele naquele contexto."
                    },
                    {
                        role: "user",
                        content: textoUsuario
                    }
                ]
            })
        });

        let dados = await resposta.json();

        if (!resposta.ok) {
            respostaIA.innerText = "Erro: " + JSON.stringify(dados);
            return;
        }

        respostaIA.innerText = dados.choices[0].message.content;

    } catch (erro) {
        console.log(erro);
        respostaIA.innerText = "Erro ao conectar com a IA.";
    }
}

botao.addEventListener("click", perguntarErva);