"use strict";
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
console.log("app.ts");
function add(num1, num2, showResult) {
    if (showResult) {
        console.log("Inside the if satement...");
        return num1 + num2;
    }
    else {
        return num1 + num2;
    }
}
var test;
test = 3;
test = 3;
console.log(test);
var printResult = true;
button.addEventListener("click", function () {
    console.log("button is clicked!");
});
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value, printResult));
});
var Car = {
    name: "BMW",
    owner: "Sam",
};
console.log(Car.name);
console.log("The list of vechiles..");
var vechiles = ["BMW", "Audi", "Swift"];
for (var _i = 0, vechiles_1 = vechiles; _i < vechiles_1.length; _i++) {
    var vechile = vechiles_1[_i];
    console.log(vechile);
}
function combine(input1, input2) {
    var result;
    if (typeof input1 == "number" && typeof input2 == "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}
var result = combine(5, 4);
console.log("union add " + result);
result = combine("ram", "charan");
console.log("string add: " + result);
