"use strict";
// Basic Types 
// Primitive types (number, string, boolean)
// Arrays
// Tuples 
// Enumes
// any, unknown, void, null, undefined, Never
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, 4,];
let a = ['Saad', 21];
let b;
b = 12;
b = 'Saad';
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
function abcd() {
    console.log('Nothing');
}
function string() {
    return 'Saad';
}
function number() {
    return 12;
}
function bool() {
    return true;
}
let c;
c = 'Saad';
c = null;
let d;
// function any():never{
//     while(true){}
// }
// any()
// console.log('hey')
// types Inference 
// Understanding type inference
// Type annotations
// automatically defined our tpye 
// annotation mean tell which types 
// let a:number
//# sourceMappingURL=app.js.map