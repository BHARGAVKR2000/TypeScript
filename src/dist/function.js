"use strict";
var button1 = document.querySelector("button");
button1.addEventListener("click", clickHandler.bind(null, "hello Event started..."));
function clickHandler(message) {
    console.log("message: " + message);
}
function addAndHandle(input1, input2, cb) {
    var result = input2 + input1;
    cb(result);
}
addAndHandle(5, 2, function (result) {
    console.log("the result is: " + result);
});
function addNumber(num1, num2) {
    return num1 + num2;
}
function printValue(input) {
    console.log("the Added Values is: " + input);
}
var addValues;
addValues = addNumber;
printValue(addValues(2, 1));
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured", 500);
