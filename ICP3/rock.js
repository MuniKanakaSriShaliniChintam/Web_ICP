var player_score=0;
var computer_score=0;

function game(option) {
    let Computer = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
    if (option == Computer) {
        document.getElementById("w").innerHTML = "Match is draw!";
    } else if (option == "Rock") {
        if (Computer == "Paper") {
            document.getElementById("w").innerHTML = "Computer Won!";
            computer_score++;
            document.getElementById("cs").innerHTML = "Computer Score:" + computer_score.toString();
        } else {
            document.getElementById("w").innerHTML = "Player Won!";
            player_score++;
            document.getElementById("ys").innerHTML = "Your Score:" + player_score.toString();
        }

    } else if (option == "Paper") {

        if (Computer == "Scissors") {
            document.getElementById("w").innerHTML = "Computer Won!";
            computer_score++;
            document.getElementById("cs").innerHTML = "Computer Score:" + computer_score.toString();

        } else {
            document.getElementById("w").innerHTML = "Player Won!";
            player_score++;
            document.getElementById("ys").innerHTML = "Your Score:" + player_score.toString();
        }

    } else if (option == "Scissors") {
        if (Computer == "Rock") {
            document.getElementById("w").innerHTML = "Computer Won!";
            computer_score++;
            document.getElementById("cs").innerHTML = "Computer Score:" + computer_score.toString();
        } else {
            document.getElementById("w").innerHTML = "Player Won!";
            player_score++;
            document.getElementById("ys").innerHTML = "Your Score:" + player_score.toString();
        }

    }
}
    function  restart(){
        player_score =0;
        computer_score=0;
        document.getElementById("ys").innerHTML = "Your Score:"+ player_score.toString();
        document.getElementById("cs").innerHTML = "Computer Score:"+ computer_score.toString();
    }

