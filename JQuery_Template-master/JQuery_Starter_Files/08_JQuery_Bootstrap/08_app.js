// get the HTML elements
let modalHeader = $('#modal-header');
let modalTitle = $('#modal-title');
let theButton = $('#the-button');

// click on Login Button
$('#login-button').click(function() {
    $('#form-modal').modal('show'); // display modal
    modalHeader.removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
    modalTitle.text('Login Here');
    theButton.removeClass('btn-teal').removeClass('btn-warning').addClass('btn-success');
    theButton.attr('value','Login');
});

// click on Register Button
$('#register-button').click(function() {
    $('#form-modal').modal('show'); // display modal
    modalHeader.removeClass('bg-teal').removeClass('bg-success').addClass('bg-warning');
    modalTitle.text('Register Here');
    theButton.removeClass('btn-teal').removeClass('btn-success').addClass('btn-warning');
    theButton.attr('value','Register');
});

// click on Signup Button
$('#signup-button').click(function() {
    $('#form-modal').modal('show'); // display modal
    modalHeader.removeClass('bg-success').removeClass('bg-success').addClass('bg-teal');
    modalTitle.text('Signup Here');
    theButton.removeClass('btn-success').removeClass('btn-success').addClass('btn-teal');
    theButton.attr('value','SignUp');
});