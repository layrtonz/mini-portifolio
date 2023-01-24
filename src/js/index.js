const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }
        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
        mostrarOutroAba(aba)

    });
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")

        aba.classList.add("selecionado");
}
function mostrarInformacoesDaAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")

        aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
};

function mostrarOutroAba(aba){
    const projetoSelecionada = document.querySelector(".projeto.selecionado");
        projetoSelecionada.classList.remove("selecionado");

        const idDoElementoProjetoDaAba = `projetos-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoProjetoDaAba)
        informacaoASerMostrada.classList.add("selecionado")
};