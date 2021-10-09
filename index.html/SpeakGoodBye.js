(function (window) {

var byespeaker = {};
byespeaker.name= "james";

var speakWord = "Good Bye";

 byespeaker.saygoodbyy= function () {
  console.log(speakWord + " " + byespeaker.name);
}

window.byespeaker =byespeaker
})(window);

byespeaker.saygoodbyy();
