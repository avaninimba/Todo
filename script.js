$(document).ready(function(){
    $("loginbutton").click(function(){
      sessionStorage.mittnamn = "Avani Nimba";
      document.getElementById("main").innerHTML= sessionStorage.mittnamn;
      });
  
    });