var ruby;
var php;
var java;

var selectionPath = function(selection) {
  alert("ruby precount");
  if(selection === "track1")
  {
    ruby = ruby + 1;
    alert("this fired")
  }
  if(selection === "track2")
  {
    alert("you blew2");
  }
  return $(ruby+1);
};

// var i;
// for (i = 0; i < 9; i++) {
// var j = j++;
// $(selectionPath(choice"" + j)));
// }


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

    var i;
for (i = 0; i < 9; i++) {
    var j = j++;
    $(selectionPath(choice"" + j));
}
    //   // $("#results").append(choice1);
    console.log(choice + j);
    });
  });
