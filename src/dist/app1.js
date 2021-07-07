"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = -1] = "ADMIN";
    Role[Role["USER"] = 0] = "USER";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
})(Role || (Role = {}));
;
var Person = {
    name: "rajesh",
    age: 30,
    hobbies: ["chess", "cricket"],
    role: Role.AUTHOR
};
console.log(Person);
var names;
names = ["lokesh", "ramesh"];
console.log("The Hobbie of " + Person.name + " are:");
for (var _i = 0, _a = Person.hobbies; _i < _a.length; _i++) {
    var hobbie = _a[_i];
    console.log(hobbie.toUpperCase());
}
if (Person.role == Role.AUTHOR) {
    console.log("This is admin");
}
