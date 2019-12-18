// show() , hide()
$('#btn-1').click(function() {
    let buttonText = $(this).text();
    if(buttonText === 'hide'){
        $('#card-1').hide(500);
        $(this).text('show');
    }
    else {
        $('#card-1').show(500);
        $(this).text('hide');
    }
});


// toggle()
$('#btn-2').click(function() {
    let buttonText = $(this).text();
    $('#card-2').toggle(500);
    (buttonText === 'hide') ? $(this).text('show') : $(this).text('hide');
});

$('btn-3').click(function(){
    $("card-3").fadeIn();
    $("card-3").fadeIn("slow");
    $("card-3").fadeIn(3000);
});


// fadeIn() , fadeOut() -> fadeToggle()

// slideup() , slideDown() -> slideToggle()
