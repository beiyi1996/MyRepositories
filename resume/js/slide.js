<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

$('#navcontact').click(function () {
    $('html,body').animate({ scrollTop: $('#contact').offset().top }, 1000);
});
$('#navportfolio').click(function () {
    $('html,body').animate({ scrollTop: $('#portfolio').offset().top }, 1000);
});
$('#navabout').click(function () {
    $('html,body').animate({ scrollTop: $('#about').offset().top }, 1000);
});
$('#navhome').click(function () {
    $('html,body').animate({ scrollTop: $('#home').offset().top }, 1000);
});