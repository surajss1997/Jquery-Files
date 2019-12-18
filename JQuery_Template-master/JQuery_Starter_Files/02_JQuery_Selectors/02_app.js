// Tag Selector , id selector , class selector
$('.lead').click(function() {
    $(this).css({
        backgroundColor : 'orange',
        padding : '10px',
        boxShadow : '0 0 10px black'
    });
});


// Attribute
$('input[type="text"]').focus(function() {
    $(this).css({
        backgroundColor : 'blueviolet',
        outline : 'none',
        border : 'none',
        boxShadow : '0 0 10px white',
        color : 'white'
    });
}).blur(function() {
    $(this).css({
        backgroundColor : 'white',
        outline : 'none',
        border : 'none',
        boxShadow : '0 0 0px white',
        color : 'black'
    });
});
