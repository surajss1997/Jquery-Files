// JavaScript Way
let inputField1 = document.querySelector('#inputField-1');
let messageElement1 = document.querySelector('#msg-1');
inputField1.addEventListener('keyup',function() {
    let textEntered = inputField1.value;
    messageElement1.innerText = textEntered;
});

// JQuery Way
$('#inputField-2').keyup(function() {
    $('#msg-2').text($(this).val());
});