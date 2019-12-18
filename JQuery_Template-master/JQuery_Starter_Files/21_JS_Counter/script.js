let count = 0;
let interval = 0;

// click on button
$('#start-btn').click(function () {
    interval = setInterval(countNumber,10);
});

let countNumber = () => {
    count = (count + 0.10);
    if(count < 100){
        $('#count').text(count.toFixed(2));
        $('.circle').css({
            backgroundColor : `rgb(${count * 2},50,50)`
        });
    }
    else{
        clearInterval(interval);
        $('#count').text('Over!');
    }
};