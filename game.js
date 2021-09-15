var username1 = localStorage.getItem("username1");
var username2 = localStorage.getItem("username2");


document.getElementById("player1Username").innerHTML = "Score for "+ username1 + ": ";
document.getElementById("player2Username").innerHTML = "Score for "+ username2 + ": ";

document.getElementById("questionTurn").innerHTML = "Question Turn: " + username1;
document.getElementById("answerTurn").innerHTML = "Answer Turn: " + username2;



function send() {
    var firstNumber = document.getElementById("firstNumberInput").value;
    var operation = document.getElementById("operationInput").value;console.log(firstNumber);
    secondNumber = document.getElementById("secondNumberInput").value;
    console.log(secondNumber);
    console.log(operation);
    if(operation == "-") {
        var actualAnswer = parseInt(firstNumber) - parseInt(secondNumber);
        localStorage.setItem("actualAnswer", actualAnswer);
        console.log(actualAnswer);
    }
    if(operation == "+") {
        var actualAnswer = parseInt(firstNumber) + parseInt(secondNumber);
        localStorage.setItem("actualAnswer", actualAnswer);
        console.log(actualAnswer);
    }
    if(operation == "x") {
        var actualAnswer = parseInt(firstNumber) * parseInt(secondNumber);
        localStorage.setItem("actualAnswer", actualAnswer);
        console.log(actualAnswer);
    }
    if(operation == "/") {
        var actualAnswer = parseInt(firstNumber) / parseInt(secondNumber);
        localStorage.setItem("actualAnswer", actualAnswer);
        console.log(actualAnswer);
    }
    
    var question = firstNumber + operation + secondNumber;
    document.getElementById("question").innerHTML = question;
    document.getElementById("firstNumberInput").value = "";
    document.getElementById("secondNumberInput").value = "";
    document.getElementById("operationInput").value = "";
}

var questionTurn = "username1";
var answerTurn = "username2";

var player1Score = 0;
document.getElementById("player1Score").innerHTML = player1Score;
var player2Score = 0;
document.getElementById("player2Score").innerHTML = player2Score;

function checkAnswer() {
    var playerAnswer = document.getElementById("answer").value;
    
    var realAnswer = localStorage.getItem("actualAnswer");
    console.log(realAnswer);

    if(playerAnswer == realAnswer) {
        
        if(answerTurn == "username1") {
            document.getElementById("answer").innerHTML = "";
            var updatedPlayer1Score = player1Score + 1;
            player1Score = updatedPlayer1Score;
            console.log("player1Score = " + player1Score);
            document.getElementById("player1Score").innerHTML = player1Score;
            answerTurn = "username2";
            document.getElementById("answerTurn").innerHTML = "Answer Turn: " + username2;
        }
        
        else {
            document.getElementById("answer").innerHTML = "";
            var updatedPlayer2Score = player2Score + 1;
            player2Score = updatedPlayer2Score;
            console.log("player2Score = " + player2Score);
            document.getElementById("player2Score").innerHTML = player2Score;
            answerTurn = "username1";
            document.getElementById("answerTurn").innerHTML = "Answer Turn: " + username1;
        }
      
        if(questionTurn == "username1") {
            document.getElementById("answer").innerHTML = "";
            questionTurn = "username2";
            document.getElementById("questionTurn").innerHTML = "Question Turn: " + username2;
        }
        else {
            document.getElementById("answer").innerHTML = "";
            questionTurn = "username1";
            document.getElementById("questionTurn").innerHTML = "Question Turn: " + username1;      
        }
    }
    
}