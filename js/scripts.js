//business logic




$(document).ready(function() {
  $("form#NAMEORID").submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($("#triangle1").val());
    

    console.log(side3, side2, side1);

    var triquery= function(side1, side2, side3) {

      console.log(side1, side2, side3);
      return("");
    };
      $("ul#results").append(triquery(side1, side2, side3));
    });
  });
