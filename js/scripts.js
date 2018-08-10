var java;
var ruby;
var php;

var selectionPath = function(selection) {
console.log("selection path fired")
  if(selection === "track1")
  {
    ruby = ruby + 1;
  }
  if(selection === "track2")
  {
    php = php + 1;
  }
  if(selection === "track3")
  {
    java = java +1;
  }
};

var whatPath = function(java, ruby, php) {
  if (java > ruby && java > php)
  {
    return "trackJava";
  }
  if (php > ruby && php > java)
  {
    return "trackPhp";
  }
  if (ruby > java &&  ruby > php)
  {
    return "trackRuby";
  }
};
//business logic




$(document).ready(function() {
  $("#trackSelection").submit(function(event) {
    event.preventDefault();
    ruby = 0;
    java = 0;
    php = 0;
    var choice1 = $('input[name=q1]:checked', '#trackSelection').val();
    var choice2 = $('input[name=q2]:checked', '#trackSelection').val();
    var choice3 = $('input[name=q3]:checked', '#trackSelection').val();
    var choice4 = $('input[name=q4]:checked', '#trackSelection').val();
    var choice5 = $('input[name=q5]:checked', '#trackSelection').val();
    var choice6 = $('input[name=q6]:checked', '#trackSelection').val();
    var choice7 = $('input[name=q7]:checked', '#trackSelection').val();
    var choice8 = $('input[name=q8]:checked', '#trackSelection').val();
    var choice9 = $('input[name=q9]:checked', '#trackSelection').val();
    var j = 0;
    var i;

    $(selectionPath(choice1));
    $(selectionPath(choice2));
    $(selectionPath(choice3));
    $(selectionPath(choice4));
    $(selectionPath(choice5));
    $(selectionPath(choice6));
    $(selectionPath(choice7));
    $(selectionPath(choice8));
    $(selectionPath(choice9));
    //this could be done easily with a loop??//

    });
  });
