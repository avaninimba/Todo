$(document).ready(function(){
        // on click Sign In Button checks that username =='admin' and password == 'password'

        //sessionStorage.mittnamn = "admin";
        //sessionStorage.mittpass = "password";
        $("#login").click(function(){
        if( $("#User").val()=='admin' && $("#Pass").val()=='password') {
                $("#welcome").hide();
                $("#loggedin").append("<p>Hello, admin</p> <br/><input type='button' id='logout' value='Log Out' />");
            }
        else {
            $("#welcome").append("<p>Hello, please try again</p>");
        }

        $("#loggedout").click(function() {
        $("#form")[0].reset();
        $("#welcome").show();
        $("#loggedin").hide();
        
    });
});

});