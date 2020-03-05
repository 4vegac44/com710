
function handleForm1() {
    // display a pop-up dialog box with an answer
    alert("Hello");
}

document.getElementById('form1-submit').onclick = function() {
    handleForm1();
};

function sum(firstNumber, secondNumber) {
    var message = "The sum is " + (firstNumber + secondNumber);
    return message
}

function sum2(){
    alert(sum(3, 5));
}

document.getElementById('button2').onclick = function() {
    sum2();
};

