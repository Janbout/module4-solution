( function (window) {
var hellospeaker = {};
hellospeaker.name ="yakkov";
var speakWord = "Hello";
hellospeaker.sayheelo  =  function () {
  console.log(speakWord + " " + hellospeaker.name);
  
}

window.hellospeaker = hellospeaker;

})(window);



hellospeaker.sayheelo();

