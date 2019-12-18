let lessonsArray = ["Let us now look deep into what are objects. If we consider the real-world, we can find many objects around us, cars, dogs, humans, etc. All these objects have a state and a behavior.","If we consider a dog, then its state is - name, breed, color, and the behavior is - barking, wagging the tail, running.","If you compare the software object with a real-world object, they have very similar characteristics.","Software objects also have a state and a behavior. A software object's state is stored in fields and behavior is shown via methods.","So in software development, methods operate on the internal state of an object and the object-to-object communication is done via methods.","A class can have any number of methods to access the value of various kinds of methods. In the above example, barking(), hungry() and sleeping() are methods.","Following are some of the important topics that need to be discussed when looking into classes of the Java Language.","A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following","In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.","A constructor initializes an object when it is created. It has the same name as its class and is syntactically similar to a method. However, constructors have no explicit return type."];

// GET the html elements
let originalTextElement = $('#original-text');
let textAreaBox = $('#text-area');
let messageCard = $('#message-card');
let messageElement = $('#message');
let resetButton = $('#reset-button');
let minutesElement = $('#minutes');
let secondssElement = $('#seconds');
let milliSecondsElement = $('#m-seconds');
let timerRunning = false;
let timer = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;

// Keyup on text area
textAreaBox.keyup(function() {
    let textEnteredLength = $(this).val().length;
    if(textEnteredLength === 1 && !timerRunning){
        interval = setInterval(startTimer,10); // start timer
        timerRunning = true;
    }
    let originalText =  originalTextElement.text();
    let textEntered = $(this).val();
    let partialText = originalText.substr(0,textEntered.length);
    evaluateText(textEntered , originalText , partialText);
});

// evaluate Text
let evaluateText = (textEntered , originalText , partialText) => {
    if(textEntered === ''){
        messageCard.removeClass('bg-danger').removeClass('bg-primary').removeClass('bg-success').addClass('bg-light');
        messageElement.text('');
    }
    else{
        if(textEntered === originalText){
            messageCard.removeClass('bg-danger').removeClass('bg-primary').removeClass('bg-light').addClass('bg-success');
            messageElement.text('Congratulations');
            clearInterval(interval); // stop the timer
            $('#congrats-modal').modal('show'); // to display the modal
            $('#congrats-sound').trigger('play'); // play the audio file
        }
        else{
            if(textEntered === partialText){
                messageCard.removeClass('bg-danger').removeClass('bg-success').removeClass('bg-light').addClass('bg-primary');
                messageElement.text('Correct Dude!');
            }
            else{
                messageCard.removeClass('bg-primary').removeClass('bg-success').removeClass('bg-light').addClass('bg-danger');
                messageElement.text('Wrong Dude!');
                $('#clap-sound').trigger('play'); // play the audio file
            }
        }
    }
};

// Click on Reset Button
resetButton.click(function() {
    clearInterval(interval); // stops the timer
    resetFields();
});


// start timer
let startTimer = () => {
    timer++;

    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutesElement.text(leadingZero(minutes));
    secondssElement.text(leadingZero(seconds));
    milliSecondsElement.text(leadingZero(milliSeconds));
};

// leading zero
let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time;
    }
    else {
        return  time;
    }
};

// resetFields
let resetFields = () => {
    timerRunning = false;
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    textAreaBox.val('');
    messageCard.removeClass('bg-danger').removeClass('bg-primary').removeClass('bg-success').addClass('bg-light');
    messageElement.text('');
    minutesElement.text('00');
    secondssElement.text('00');
    milliSecondsElement.text('00');
    originalTextElement.text('Try Another Lesson!');
};

// changeText
let changeText = (index) => {
    let lesson = lessonsArray[index];
    originalTextElement.text(lesson);
};