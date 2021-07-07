enum Role {ADMIN = -1, USER, AUTHOR};

const Person = {
  name: "rajesh",
  age: 30,
  hobbies: ["chess", "cricket"], // Array of String
  role:Role.AUTHOR
};




console.log(Person);

let names: string[];    // Array declaration

names = ["lokesh", "ramesh"];

console.log("The Hobbie of " + Person.name + " are:");
for (const hobbie of Person.hobbies) {  // looping through the arrays
  console.log(hobbie.toUpperCase()); 
}

if(Person.role == Role.AUTHOR){
  console.log("This is admin")
}
