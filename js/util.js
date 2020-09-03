var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 50);
}

function show() {
    var fade = document.getElementById("fade");
    opacity = Number(window.getComputedStyle(fade)
        .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.05;
        fade.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}
/* ============================================================= */
jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600);
    });
});
/* ============================================================= */
/* 
$('.content0').magicDisplay();

$('.content0').magicDisplay({
    duration: 1000
});

$('.content0').magicDisplay({
    duration: 1000,
    displayFullVisible: true,
});

$('.content0').magicDisplay({
    minWidth: 960,
});
*/