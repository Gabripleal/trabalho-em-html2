// ==========================================
// Projeto: Portfólio Pessoal
// Aluno: Gabriel Peres Leal
// Arquivo JavaScript principal
// ==========================================



// ==========================================
// ALTERAÇÃO DE TEMA (CLARO / ESCURO)
// ==========================================

// Seleciona o botão de tema
const botaoTema = document.getElementById("botao-tema");


// Evento de clique no botão
botaoTema.addEventListener("click", function(){

    // Adiciona ou remove a classe "dark" no body
    document.body.classList.toggle("dark");


    // Verifica se o tema escuro está ativo
    if(document.body.classList.contains("dark")){

        // Troca o emoji do botão
        botaoTema.innerHTML = "☀️";

    }else{

        // Volta para o ícone de lua
        botaoTema.innerHTML = "🌙";
    }

});



// ==========================================
// VALIDAÇÃO DO FORMULÁRIO
// ==========================================

// Seleciona o formulário
const formulario = document.getElementById("form-contato");


// Evento de envio do formulário
formulario.addEventListener("submit", function(event){

    // Impede o recarregamento da página
    event.preventDefault();


    // ==========================================
    // CAPTURA DOS CAMPOS
    // ==========================================

    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();


    // ==========================================
    // VERIFICA CAMPOS VAZIOS
    // ==========================================

    if(nome === "" || email === "" || mensagem === ""){

        alert("Por favor, preencha todos os campos!");

        return;
    }


    // ==========================================
    // VALIDAÇÃO DE EMAIL
    // ==========================================

    // Expressão regular para validar email
    const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Testa o email
    if(!validarEmail.test(email)){

        alert("Digite um e-mail válido!");

        return;
    }


    // ==========================================
    // SIMULAÇÃO DE ENVIO
    // ==========================================

    alert("Mensagem enviada com sucesso!");


    // ==========================================
    // LIMPA O FORMULÁRIO
    // ==========================================

    formulario.reset();

});



// ==========================================
// PESQUISA SIMPLES NAS SEÇÕES
// ==========================================

// Seleciona a barra de pesquisa
const barraPesquisa = document.querySelector(".barra-pesquisa");


// Evento ao digitar
barraPesquisa.addEventListener("keyup", function(){

    // Texto digitado convertido para minúsculo
    const textoPesquisa = barraPesquisa.value.toLowerCase();


    // Seleciona todas as seções
    const secoes = document.querySelectorAll(".secao");


    // Percorre cada seção
    secoes.forEach(function(secao){

        // Pega o texto da seção
        const conteudo = secao.textContent.toLowerCase();


        // Verifica se encontrou o texto
        if(conteudo.includes(textoPesquisa)){

            // Mostra a seção
            secao.style.display = "block";

        }else{

            // Esconde a seção
            secao.style.display = "none";
        }

    });

});



// ==========================================
// EFEITO AO ROLAR A PÁGINA
// ==========================================

// Evento de scroll da página
window.addEventListener("scroll", function(){

    // Seleciona o header
    const header = document.querySelector("header");


    // Verifica posição da rolagem
    if(window.scrollY > 50){

        // Adiciona sombra ao menu
        header.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";

    }else{

        // Remove sombra
        header.style.boxShadow = "none";
    }

});



// ==========================================
// MENSAGEM NO CONSOLE
// ==========================================

console.log("Portfólio carregado com sucesso!");