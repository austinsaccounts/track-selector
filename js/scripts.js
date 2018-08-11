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
    return("trackJava");
  }
  if (php > ruby && php > java)
  {
    return("trackPhp");
  }
  if (ruby > java &&  ruby > php)
  {

    return("trackRuby");
  }
};
//business logic




$(document).ready(function() {
  $("#trackSelection").submit(function(event) {
    event.preventDefault();
    java = 0;
    php = 0;
    ruby = 0;

    var choice1 = $('input[name=q1]:checked', '#trackSelection').val();
    var choice2 = $('input[name=q2]:checked', '#trackSelection').val();
    var choice3 = $('input[name=q3]:checked', '#trackSelection').val();
    var choice4 = $('input[name=q4]:checked', '#trackSelection').val();
    var choice5 = $('input[name=q5]:checked', '#trackSelection').val();
    var j = 0;
    var i;

    $(selectionPath(choice1));
    $(selectionPath(choice2));
    $(selectionPath(choice3));
    $(selectionPath(choice4));
    $(selectionPath(choice5));
    var thisthing = whatPath(java, php, ruby);
  $("#results").append(whatPath(java, php, ruby));
$("#trackSelection").hide();
$("#"+thisThing).show();
  console.log(thisthing);
    });
  });
