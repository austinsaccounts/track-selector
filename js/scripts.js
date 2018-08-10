//business logic




$(document).ready(function() {
  $("#trackSelection").submit(function(event) {
    event.preventDefault();

    var choice1 = $('input[name=q1]:checked', '#trackSelection').val()
    var choice2 = $('input[name=q2]:checked', '#trackSelection').val()
    var choice3 = $('input[name=q3]:checked', '#trackSelection').val()
    var choice4 = $('input[name=q4]:checked', '#trackSelection').val()
    var choice5 = $('input[name=q5]:checked', '#trackSelection').val()
    var choice6 = $('input[name=q6]:checked', '#trackSelection').val()
    var choice7 = $('input[name=q7]:checked', '#trackSelection').val()
    var choice8 = $('input[name=q8]:checked', '#trackSelection').val()
    var choice9 = $('input[name=q9]:checked', '#trackSelection').val()

    var tester = $(parseInt(3));


    console.log(parseInt(tester)+parseInt(tester));
 $()
    // var triquery= function(side1, side2, side3) {

    //   console.log(side1, side2, side3);
    //   return("");
    // };
      $("#results").append(choice1);
    });
  });
