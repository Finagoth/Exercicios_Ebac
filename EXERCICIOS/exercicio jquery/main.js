$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault(); 

        const novaTarefa = $('#nova-tarefa').val();
       
        if (novaTarefa.trim() !== '') {
            const novoItemTarefa = $('<li></li>').text(novaTarefa);

            novoItemTarefa.click(function() {
                $(this).toggleClass('tarefa-feita');
            });

            $('#lista-tarefa').append(novoItemTarefa);
            $('#nova-tarefa').val('');
        }
    });
});