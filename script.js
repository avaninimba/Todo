$(document).ready(function(){
    $("#loginbutton").click(function(){
      sessionStorage.mittnamn = "Avani Nimba";
      document.getElementById("#p1").innerHTML= sessionStorage.mittnamn;
      });
  
    });