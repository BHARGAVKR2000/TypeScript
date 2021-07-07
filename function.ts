function addAndHandle(input1: number, input2: number, cb:(num: number) => void){  // cb = callback funciton
    let result = input2 + input1;
    cb(result);
}

addAndHandle(5,2, (result) => {
    console.log("the result is: "+result);
})

/* ********************************************************************************************** */
function add(num1: number, num2: number): number{  // explicit declaration of return type
    return num1 + num2;
}

function printValue(input: number){
    console.log("the Added Values is: "+ input);
}

let addValues : (a:number, b: number) => number;

addValues = add;

printValue(addValues(2,1));