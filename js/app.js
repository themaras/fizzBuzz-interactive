$(document).ready(function () {
    var fizzBuzz = function () {
        var userNum = prompt('Please Enter a Number!');
        var convertNum = +userNum;
        if (isNaN(userNum)) {
            alert("This is not a number. Try Again!");
            fizzBuzz();
        } else if (convertNum % 1 !== 0) {
            alert('This is not an Integer. Try Again!');
            fizzBuzz();
        } else {
            for (var i = 1; i <= convertNum; i++) {
                if (i % 15 === 0) {
                    $('ul').append('<li>' + "fizzbuzz" + '</li>');
                } else if (i % 3 === 0) {
                    $('ul').append('<li>' + "fizz" + '</li>');
                } else if (i % 5 === 0) {
                    $('ul').append('<li>' + "buzz" + '</li>');
                } else {
                    $('ul').append('<li>' + i + '</li>');
                }
            }
        }

    };
    fizzBuzz();
});