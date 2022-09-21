var yourTime = new Date("oct 12, 2022 00:00:00").getTime();

var demo = document.querySelector(".demo");

var x = setInterval(function(){
  
  var now = new Date().getTime();
  
  var distance = yourTime - now;
  
  var _second = 1000; 
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  
  var day = Math.floor(distance / _day);
  var hour = Math.floor((distance % _day) / _hour);
  var minute = Math.floor((distance % _hour) / _minute);
  var second = Math.floor((distance % _minute) / _second);
  
  
  demo.innerHTML = `${day} gün ${hour} saat ${minute} dakika ${second} saniye`;
  
  
  if(distance < 0){
     clearInterval(x);
    demo.innerHTML = "expired";
  }
  
},1000);