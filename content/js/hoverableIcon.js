$(document).ready(function () {
    function showButtons() {
        $('#btn-two').fadeIn(500);
        $('#btn-three').fadeIn(500);
    }
    function hideButtons() {
        $('#btn-two').fadeOut(500);
        $('#btn-three').fadeOut(500);
    }
    $('#float-box').hover(showButtons, hideButtons);

    
});