const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

console.log("app.ts");
function add(num1: number, num2: number, showResult: boolean) {
  if (showResult) {
    console.log("Inside the if satement...");
    return num1 + num2;
  } else {
    return num1 + num2;
  }
}
let test: number;
test = 3;
test = 3;
console.log(test);
let printResult = true;

button.addEventListener("click", ()=> {
  console.log("button is clicked!");
})

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value, printResult));
});

const Car: {
  name: string;
  owner: string;
} = {
  name: "BMW",
  owner: "Sam",
};

console.log(Car.name);

console.log("The list of vechiles..");
const vechiles = ["BMW", "Audi", "Swift"];

for (let vechile of vechiles) {
  console.log(vechile);
}

//Union in typeScript

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 == "number" && typeof input2 == "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

let result = combine(5, 4);
console.log("union add " + result);

result = combine("ram", "charan");
console.log("string add: " + result);
