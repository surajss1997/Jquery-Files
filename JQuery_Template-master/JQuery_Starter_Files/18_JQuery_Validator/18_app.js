$.validator.setDefaults( {
    submitHandler: function () {
        alert( "Form Submitted Successfully...." );
    }
} );

$('#register-form').validate({
    rules : {
        firstname : {
            required : true,
            minlength: 3
        },
        lastname : {
            required : true,
            minlength: 3
        },
        username : {
            required : true,
            minlength: 5
        },
        email : {
            required : true,
            email: true
        },
        password : {
            required : true,
            minlength: 5
        },
        c_password : {
            required : true,
            minlength: 5,
            equalTo: "#password"
        },
        about : {
            required : true
        },
        terms : {
            required : true
        }
    },
    messages : {
        firstname : {
            required : 'Please Enter the First Name',
            minlength: 'Please Enter min 3 letter for First Name'
        },
        lastname : {
            required : 'Please Enter the Last Name',
            minlength: 'Please Enter min 3 letter for Last Name'
        },
        username : {
            required : 'Please Enter the User Name',
            minlength: 'Please Enter min 5 letter for User Name'
        },
        email : {
            required : 'Please Enter an Email',
            email: 'Please Enter the Proper Email Id'
        },
        password : {
            required : 'Please Enter the Password',
            minlength: 'Please Enter min 5 letter for Password'
        },
        c_password : {
            required : 'Please Enter the Confirm Password',
            minlength: 'Please Enter min 5 letter for Confirm Password',
            equalTo: "Both the Passwords are NOT Matched"
        },
        about : {
            required : 'Please Enter About Yourself',
        },
        terms : {
            required : 'Please Accept the Terms & Conditions',
        }
    },
    errorPlacement: function ( error, element ) {
        // Add the `invalid-feedback` class to the error element
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }
});