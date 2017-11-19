$(document).ready(function(){
    $("button").click(function(){
      sessionStorage.mittnamn = "Avani Nimba";
      document.getElementById("showname").innerHTML= sessionStorage.mittnamn;
      });
  
    });