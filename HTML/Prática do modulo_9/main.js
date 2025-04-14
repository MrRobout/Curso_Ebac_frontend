$(document).ready(function() {
    // Manipulação do formulário
    $('#form-tarefa').submit(function(e) {
        e.preventDefault(); // Evita o recarregamento da página
        const novaTarefa = $('#input-tarefa').val().trim();
        
        if (novaTarefa) {
            // Adiciona a nova tarefa à lista
            $('#lista-tarefas').append(
                $('<li>').text(novaTarefa)
            );
            
            // Limpa o campo de input
            $('#input-tarefa').val('');
        }
    });

    // Efeito de linha ao clicar em um item da lista
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});