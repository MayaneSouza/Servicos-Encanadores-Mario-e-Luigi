const form = document.querySelector(".form-fale-conosco");
const mascara = document.querySelector(".mascara-form");

function BotaoEntreEmContato() {
    form.style.left = "40%"; // Define a posição para 40% da largura da tela
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible"; // Torna a máscara visível
}

function EsconderForm() {
    mascara.style.visibility = "hidden"; // Esconde a máscara
    form.style.left = "-370px"; // Move o formulário para fora da tela
    form.style.transform = "translateX(0)"; // Remove qualquer transformação no eixo X
}
