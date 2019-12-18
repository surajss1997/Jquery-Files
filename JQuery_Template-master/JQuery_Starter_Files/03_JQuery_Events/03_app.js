// Click Event
$('#btn-1').click(function() {
    $(this).removeClass('btn-danger').addClass('btn-success').text('Register');
});

// DblClick
$('#btn-2').dblclick(function() {
    $(this).removeClass('btn-success').addClass('btn-danger').text('Login');
});

// Toggle effect
$('#btn-3').click(function () {
    if($(this).text() === 'login'){
        $(this).removeClass('btn-danger').addClass('btn-success').text('register');
    }
    else{
        $(this).removeClass('btn-success').addClass('btn-danger').text('login');
    }
});

// Keyup event
$('#input-field').keyup(function() {
    $('#input-msg').text($(this).val());
});


// SMS App
$('#text-area').keyup(function () {
    $('#char-count').text(100 - $(this).val().length);
});

// Change Event
$('#select-box').change(function() {
    $('#selected-option').text($(this).val());
});

// Change Password
$('#check-box').change(function() {
    let passwordBox = $('#password-box');
    let attribute = passwordBox.attr('type');
    (attribute === 'password') ? passwordBox.attr('type','text') : passwordBox.attr('type','password');
});