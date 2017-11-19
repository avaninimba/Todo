$(document).ready(function(){
        // on click Sign In Button checks that username =='admin' and password == 'password'

        sessionStorage.mittnamn = "admin";
        sessionStorage.mittpass = "password";

        var stuffToDo = [
            "Klipp gräset", 
            "Betala räkningar",
            "Köp mjölk", 
            "Spika upp tavlor"
            ];
        var str = JSON.stringify(stuffToDo);
       

        $("#login").click(function(){
        if( $("#User").val()==sessionStorage.mittnamn && $("#Pass").val()==sessionStorage.mittpass) {
                //$("#welcome").hide();
                $("#loggedin").append("<input type='button' id='logout' value='Log Out' />");
                $("#p1").text("Hello, admin! <br>Thank you for logging in");
                $("#p2").text(str);
            }
        else {
            $("#p1").text("Please try again");
            $("#p2").text("Har du glömt ditt lösenord");
        }

        $("#loggedout").click(function() {
        $("#form")[0].reset();
        $("#welcome").show();
        $("#loggedin").hide();
        
    });
});

});