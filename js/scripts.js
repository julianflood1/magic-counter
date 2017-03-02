$(function() {


  $("form").submit(function(event) {
    var countTo = parseFloat($("#input1").val());
    var countBy = parseFloat($("#input2").val());



    var total = 0;
    for (var currentNumber = 0; currentNumber <= (countTo - countBy); currentNumber += countBy) {
      total += countBy;
      console.log(total);
    }



    event.preventDefault();
  });

});
