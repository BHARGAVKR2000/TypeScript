function addAndHandle(input1, input2, cb) {
    var result = input2 + input1;
    cb(result);
}
addAndHandle(5, 2, function (result) {
    console.log("the result is: " + result);
});
function add(num1, num2) {
    return num1 + num2;
}
function printValue(input) {
    console.log("the Added Values is: " + input);
}
var addValues;
addValues = add;
printValue(addValues(2, 1));
