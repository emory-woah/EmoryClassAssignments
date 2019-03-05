$(document).ready(function() {

//Shows us the current time
    /*function displayTime() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      var meridiem = "AM";

      if (hours>12){
        hours = hours-12;
        meridiem = "PM";
      }

      if (hours === 0){
        hours = 12;
      }

      var clockDiv = document.getElementById('clock');

      if(seconds<10){
        seconds = "0"+seconds;
      }

      if(minutes<10){
        minutes = "0"+minutes;
      }

      if(hours<10){
        hours = "0"+hours;
      }

      clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem
      ;
    }
*/
//changes the background based on the time
    function changeBackground() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();

//gives contrast to div area so it is readable
      var backgroundColor2 = "#" + (hours*2) + (minutes*2) + (seconds*2);

//adds letter to brighten up color changes
      if (hours>12){
        hours = hours-12;
      }

      if(seconds<10){
        seconds = "f"+seconds;
      }

      if(minutes<10){
        minutes = "d"+minutes;
      }

      if(hours<10){
        hours = "b"+hours;
      }

      var backgroundColor = "#" + hours + minutes + seconds;


      $("body").css("background-color", backgroundColor);
      $("div").css("background-color", backgroundColor2);

      var colorDiv = document.getElementById('color');
      colorDiv.innerText = backgroundColor;

      console.log(backgroundColor);
      console.log(backgroundColor2);

    }

    //setInterval(displayTime, 1000);
    setInterval(changeBackground, 1000);


});
