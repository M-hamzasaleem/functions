
function tableBanana(number) {

    for (var i = 1; i <= 10; i++) {


        console.log(number + " x " + i + " = " + (number * i));
    }
}

var userNumber = prompt("Kis number ka table chahiye?");


userNumber = Number(userNumber);

tableBanana(userNumber);

