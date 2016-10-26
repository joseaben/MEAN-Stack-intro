$(document).ready(inicializarEventos);
function inicializarEventos(){
  $("tr").click(presionFila);
}
function presionFila(){
    let filaActual = $(this);
    alert($(this).find('td').html());
    filaActual.css({"background":"#ff0000"});
}