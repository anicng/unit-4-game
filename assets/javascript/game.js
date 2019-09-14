$(document).ready(function () {
    // generate a targetNumber between 19-120
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    console.log("targetNumber:" + targetNumber);
    // display on target-number id
    $("#target-number").append(targetNumber);


    // assign each img a value between 1-12
    // .attr('',Math.floor(Math.random() * 10)+1)




    // When click on the image, 
    // $(".img").on('click', function(){
    // add it's assigned value to currentScore

    // });


    // if currentScore = targetNumber win++


    // if currentScore > targetNumber losses++



    // start new game

});