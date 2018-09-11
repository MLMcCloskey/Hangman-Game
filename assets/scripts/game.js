var wordArray = ["JAVASCRIPT", "MONGO", "EXPRESS", "REACT", "NODE", "BOOTSTRAP", "JQUERY", "ARRAY", "PROJECT", "HOMEWORK", "GEORGIA", "INSTITUTE", "TECHNOLOGY", "BOOTCAMP", "PROGRAMMING", "CODING"]
var winCount = 0;
var lossCount = 0;
var guessesRemaining= 5;
    var blanks =[];
    var mysteryLetter=[];

function winner(){
    winCount++;
    $("#wins").text("Wins: " + winCount);
    alert("You Win! Now you get to hang with your friends!")
}

function loser(){
    lossCount++;
    $("#losses").text("Losses: " + lossCount);
    alert("You blew it! You Should have studied more! Now you have to stay home on friday night!")
}

function reset(){   
    //  guessesRemaining= 5;
    //  blanks =[];
    //  mysteryLetter=[];
    // $("#toSolve").html(blanks);
    // mysteryWord = wordArray[Math.floor(Math.random()* wordArray.length)]
    // for (var i=0; i<mysteryWord.length; i++) {
    //     blanks.push(" ___ ");
    //     mysteryLetter.push(mysteryWord[i]);
    // }
    $("#lettersGuessed").text(" ");
    // $("#toSolve").html(blanks);
    // $("#guesses").html("Guesses remaining: " + guessesRemaining);
    init();
}


function init(){
    var guessesRemaining= 5;
    var blanks =[];
    var mysteryLetter=[];
    // var mysteryWord = "";
    // reset();
    
    mysteryWord = wordArray[Math.floor(Math.random()* wordArray.length)]

    for (var i=0; i<mysteryWord.length; i++) {
        blanks.push(" ___ ");
        mysteryLetter.push(mysteryWord[i]);
    }

    $("#wins").text(`Wins: ${winCount}`);
    $("#losses").text("Losses: " + lossCount);
    $("#toSolve").html(blanks);
    $("#guesses").text("Guesses remaining: " + guessesRemaining);

    
    document.onkeyup = function(event){
        if (event.keyCode >=65 && event.keyCode <=90 && guessesRemaining > 0 && blanks.indexOf(" ___ ")> -1){    
            var userGuess= event.key.toUpperCase();
            for (var i=0; i < mysteryLetter.length; i++) {
                if (mysteryLetter[i]===userGuess) {
                    (blanks[i])=(userGuess);
                    document.getElementById("toSolve").innerText = blanks.join(" ");
                    if (blanks.indexOf(" ___ ")===-1){
                        winner();
                        // reset();
                        // init();
                    }
                }
            }
            if (mysteryLetter.indexOf(userGuess)===-1){
                $("#lettersGuessed").append(userGuess+ " ");
                if (guessesRemaining>0){
                    guessesRemaining--;
                    $("#guesses").text(guessesRemaining + " Guesses Remaining");
                }
                if (guessesRemaining==0){
                    loser();
                    // reset();
                    // init();
                }
            }
        }
    }

    $("body").on("click", "#reset", function(){
        reset();
    });
}
init()