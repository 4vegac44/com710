function changeColor(btn) {
    btn.style.backgroundColor = "green";
  }

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

function handleForm2(){
    var text = document.getElementById("form2-text").value;
    alert(text);
}

document.getElementById("form2-submit").onclick = function(){
    handleForm2();
}

function suma(){
    var firstNumber = document.getElementById("num1").value;
    var secondNumber = document.getElementById("num2").value;
    var sum = firstNumber + secondNumber;
    alert("The sum is " + sum);
}

document.getElementById("sumnum").onclick = function(){
    suma();
}

function sum2(){
    alert(sum(3, 5));
}

document.getElementById('button2').onclick = function() {
    sum2();
};

