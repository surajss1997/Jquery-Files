// get user
let getUser = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let user = data.results[0];
            displayUser(user);
        }
    });
};

setInterval(getUser,1000);

// display User on Card
let displayUser = (user) => {
    let fullName = `${user.name.first} ${user.name.last}`;
    let imageAddress = `${user.picture.large}`;
    let userAge = `${user.dob.age} yrs`;
    $('#user-name').text(fullName);
    $('#user-img').attr('src',imageAddress);
    $('#user-age').text(userAge);
};