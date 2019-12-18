// Likes App
let likes = 0;
let dislikes = 0;
let total = 0;
// click on likes btn
$('#likes-btn').click(function() {
    likes++;
    total++;
    $('#likes').text(likes);
    $('#total').text(total);
});

// click on dis-likes btn
$('#dislikes-btn').click(function() {
    dislikes++;
    total++;
    $('#dislikes').text(dislikes);
    $('#total').text(total);
});

// Hobbies Selection
$('#eating-check').change(function() {
    evaluateCard($('#eating-card'));
});

$('#coding-check').change(function() {
    evaluateCard($('#coding-card'));
});

$('#sleeping-check').change(function() {
    evaluateCard($('#sleeping-card'));
});

// evaluate Text
let evaluateCard = (card) => {
    if(card.hasClass('d-none')){
        card.removeClass('d-none');
    }
    else{
        card.addClass('d-none');
    }
};