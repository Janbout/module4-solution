(function (window) {
  
}



  )();

  function hellospeaker(name){
    console.log("Hello" + name )
  };
  function byespeaker (name2)
  {
    console.log("Good Bye" + name2)
  };

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
 if (firstLetter === 'J') {
    byespeaker(names[i]);
  } else {
   hellospeaker(names[i]);
  }}
  
