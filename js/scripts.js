var java;
var php;
var ruby;

var selectionPath = function(selection) {
console.log("selection path fired")
  if(selection === "track1")
  {
    java = java +1;
  }
  if(selection === "track2")
  {
    php = php + 1;
  }
  if(selection === "track3")
  {
    ruby = ruby + 1;
  }
};

var whatPath = function(java, php, ruby) {
  if (java > ruby && java > php)
  {
    // $("#java").show();
    return(".java");
  }
  if (php > ruby && php > java)
  {
    // $("#python").removeClass("hid");
    // $("#python").addClass("slider");
    return(".python");
  }
  if (ruby > java &&  ruby > php)
  {
    return(".ruby");
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
    $("#results").append(whatPath(java, php, ruby));
    $("#trackSelection").hide();
    console.log(whatPath(java, php, ruby));
    // $(whatPath(java, php, ruby));
    });
    $("#reveal").click(function(){
      alert("fired reveal click")
      console.log(revelation);
      var revelation = $(whatPath(java, php, ruby));
      $(revelation).slideDown(1000);
    });
    });
