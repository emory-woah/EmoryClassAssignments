$(document).ready(function(){
  $("#buglink").hide();
  $("p").hide();

  //includes a toggle of the about section
  $("button").click(function(){
    $("p").toggle();
  });

  //when pressing the hidden "youknow" link reveals a link to the hidden bughub page.
  $("a").click(function(){
    $("#buglink").toggle();
  });

});
