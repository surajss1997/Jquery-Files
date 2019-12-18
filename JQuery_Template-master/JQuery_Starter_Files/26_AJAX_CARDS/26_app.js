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
    let userAddress = `${user.location.city} , ${user.location.state}`;
    let userCard = `<div class="col-md-8 m-auto">
                        <div class="card m-3 animated flipInX">
                            <div class="card-body bg-teal ">
                                <div class="row align-items-center no-gutters">
                                    <div class="col-md-4 animated slideInDown">
                                        <img src="${imageAddress}" class="img-thumbnail img-fluid">
                                    </div>
                                    <div class="col-md-8 animated slideInUp">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                NAME : ${fullName}
                                            </li>
                                            <li class="list-group-item">
                                                AGE : ${userAge} yrs
                                            </li>
                                            <li class="list-group-item">
                                                ADDRESS : ${userAddress.toUpperCase()}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    $('#user-row').append(userCard);
};