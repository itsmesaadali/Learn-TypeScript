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




// Interfaces and type Aliases
// Defining interfaces
// Using interfaces to define Object shapes
// Extending interfaces
// intersection types


// function usecase(a:number, b:string){
    
// }

interface User{
    name:string,
    email:string,
    password:string,
    gender?:string
}

function getDataOFUser(obj:User){
    
}
getDataOFUser({name:'Saad', email:'itmesaad@gmail.com', password:'123456'})


interface Admin extends User{
    admin:boolean
}

function admin(obj:Admin){
    obj.admin
}

interface Abcd{
    name:string
}

interface Abcd{
    email:string
}

function acbs(obj:Abcd){
    obj.name,
    obj.email
}

// type saad = string;

// let s:saad;

type value = string | number | null

let v:value

type Users = {
    name:string,
    email:string
}

type Admins = Users & {
    getDetails(user:string):void
}
function sddsvds(a:Admins){}