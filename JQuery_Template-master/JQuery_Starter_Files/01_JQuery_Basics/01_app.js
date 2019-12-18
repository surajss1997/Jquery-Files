// External JQuery
$('#red-btn').click(function () {
    $(this).text() === 'hide' ? $(this).text('show') : $(this).text('hide');
    $('#red-card').slideToggle(500);
});