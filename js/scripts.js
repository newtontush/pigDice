function PigDice() {
    var value1 = document.getElementById("die1");
    var value2 = document.getElementById("die2");
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    var sum = die1 + die2;
    value1 = die1;
    value2 = die2;
    if (sum <=10 ) {
alert("wow");
    }else {
        alert("will");
    };
    };