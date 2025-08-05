// Basic Types 
// Primitive types (number, string, boolean)
// Arrays
// Tuples 
// Enumes
// any, unknown, void, null, undefined, Never

let arr: number[] = [1,2,3,4,];  
let a:[string, number] = ['Saad', 21]

let b;
b = 12
b = 'Saad'

enum UserRoles{
    ADMIN = 'admin',
    GUEST = 'guest',
    SUPER_ADMIN = 'super_admin'
}

function abcd():void {
    console.log('Nothing')
}

function string():string {
    return 'Saad'
}


function number():number {
    return 12
}

function bool():boolean {
    return true
}

let c:string | null

c = 'Saad'
c = null

let d:undefined

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

