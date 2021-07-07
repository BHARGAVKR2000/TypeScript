const button1 = document.querySelector("button")!;

button1.addEventListener("click", clickHandler.bind(null, "hello Event started..."));  // usage of bind

function clickHandler(message: string) {
  console.log("message: " + message);
}
/* ********************************************************************************************** */

function addAndHandle(
  input1: number,
  input2: number,
  cb: (num: number) => void
) {
  // cb = callback funciton
  let result = input2 + input1;
  cb(result);
}

addAndHandle(5, 2, (result) => {
  console.log("the result is: " + result);
});

/* ********************************************************************************************** */
function addNumber(num1: number, num2: number): number {
  // explicit declaration of return type
  return num1 + num2;
}

function printValue(input: number) {
  console.log("the Added Values is: " + input);
}

let addValues: (a: number, b: number) => number;

addValues = addNumber;

printValue(addValues(2, 1));
/* ********************************************************************************************** */

function generateError(message: string, code: number): never {
  //never type it will not return anything (terminates the scripts)
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
