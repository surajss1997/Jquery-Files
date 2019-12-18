// Click JS button
$('#js-ajax-btn').click(function() {

    // Create AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the request
    http.open('GET','https://api.myjson.com/bins/9xq4l',true);

    // send the request
    http.send();

    // track the request
    http.onreadystatechange = () => {
        // response is ready and its OK
        if(http.readyState === 4 && http.status === 200){
            let data = http.responseText;
            let persons = JSON.parse(data);
            displayPersons(persons);
        }
    };
});

// JQuery button
$('#jquery-btn').click(function() {
    $.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/19wjjx',
        success : function(response) {
            let persons = response;
            displayPersons(persons);
        }
    });
});

// display persons
let displayPersons = (persons) => {
    let tableRows = '';
    for(let person of persons){
        tableRows += `<tr>
                        <td>${person.id}</td>
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.email}</td>
                        <td>${person.gender}</td>
                        <td>${person.ip_address}</td>
                      </tr>`;
    }
    $('#table_body').empty().append(tableRows);
};