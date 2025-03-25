document.addEventListener("DOMContentLoaded", 
    function () { 
        document.getElementById("formulario").addEventListener("submit", 
        function (e) { e.preventDefault(); 
    let campoA = parseFloat(document.getElementById("campoA").value); 
    let campoB = parseFloat(document.getElementById("campoB").value); 
    let mensagem = document.getElementById("mensagem"); 
    
    if (isNaN(campoA) || isNaN(campoB)) { 
    mensagem.textContent = "Erro: Por favor, insira números válidos."; 
    mensagem.style.color = "red"; 
    return; } 
    
    if (campoB > campoA) { 
        mensagem.textContent = "Formulário válido! O número B é maior que A."; 
        mensagem.style.color = "green"; } 
        else { mensagem.textContent = "Erro: O número B deve ser maior que A."; 
            mensagem.style.color = "red"; } }); });