$(document).ready(function () {
    // generate a targetNumber between 19-120
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    console.log("targetNumber:" + targetNumber);
    // display on target-number id
    $("#target-number").append(targetNumber);


    // assign each img a value between 1-12
    $("#blueGem").attr('value',Math.floor(Math.random() * 12)+1);
    $("#greenGem").attr('value',Math.floor(Math.random() * 12)+1);
    $("#orangeGem").attr('value',Math.floor(Math.random() * 12)+1);
    $("#redGem").attr('value',Math.floor(Math.random() * 12)+1);


    // When click on the image, add it's assigned value to currentScore
    var currentScore = 0;
    var wins = 0;
    var losses = 0;

    $("#current-score").text(currentScore);
    $("#win-count").text(wins);
    $("#losses-count").text(losses);

    $('img').on('click', function(){
        var number = parseInt($(this).attr('value'));
        console.log("number" + number);
        // currentScore = number + number;
        // console.log ("currentScore" + currentScore);
        // show current score
        scoreCalculator(number);

    });
    // add the value of clicked images up and show at #current-score
    
    function scoreCalculator(numInput){
        currentScore = currentScore + numInput;
        $("#current-score").text(currentScore);
        winCheck(currentScore);
        $("#win-count").text(wins);
        $("#losses-count").text(losses);

    };


    // if currentScore = targetNumber win++
    // if currentScore > targetNumber losses++
    function winCheck(){
        if (currentScore === targetNumber){
            wins++;
        }
        if(currentScore > targetNumber) {
            losses++;
        }

    };




    // start new game

});