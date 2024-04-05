//primero coloco input (radios en ves de ancors) y obtengo su valor en variables y esas variables las coloco en local storage y luego en mi js, comparo el piel, rango y rutina con lo que me va a aparecer
 

// Obtener el navbar
$(document).ready(function() {
    var mainContainer = $("#mainContainer");
    var sticky = mainContainer.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= sticky) {
            mainContainer.addClass("sticky");
        } else {
            mainContainer.removeClass("sticky");
        }
    });
});