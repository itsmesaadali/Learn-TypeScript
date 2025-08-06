// Basic Types
// Primitive types (number, string, boolean)
// Arrays
// Tuples
// Enumes
// any, unknown, void, null, undefined, Never

let arr: number[] = [1, 2, 3, 4];
let a: [string, number] = ["Saad", 21];

let b;
b = 12;
b = "Saad";

enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}

function abcd(): void {
  console.log("Nothing");
}

function string(): string {
  return "Saad";
}

function number(): number {
  return 12;
}

function bool(): boolean {
  return true;
}

let c: string | null;

c = "Saad";
c = null;

let d: undefined;

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

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function getDataOFUser(obj: User) {}
getDataOFUser({
  name: "Saad",
  email: "itmesaad@gmail.com",
  password: "123456",
});

interface Admin extends User {
  admin: boolean;
}

function admin(obj: Admin) {
  obj.admin;
}

interface Abcd {
  name: string;
}

interface Abcd {
  email: string;
}

function acbs(obj: Abcd) {
  obj.name, obj.email;
}

// type saad = string;

// let s:saad;

type value = string | number | null;

let v: value;

type Users = {
  name: string;
  email: string;
};

type Admins = Users & {
  getDetails(user: string): void;
};
function sddsvds(a: Admins) {}

// Classes and objects
// Class definition
// Constructions
// Access modifiers ( public, private, protected)
// Readonly properties
// Optional properties
// Getters and setters
// Static members
// Abstract classes and methods

class Device {
  name = "laptop";
  price = 100000;
  category = "digital";
}

let d1 = new Device();
let d2 = new Device();

class Bottle {
  radius = 120;
  price = 100;
  color = "white";
}

let b1 = new Bottle();

class BottleMarker {
  constructor(public name: string, public price: number) {}
}

let b3 = new BottleMarker("Natural", 500);

class Abcd {
  name = "Saad";

  changeName() {
    console.log(this.name);
  }
}


// class Bottle1{
//   private age:number = 21;
//   constructor(public name:string){}
// }

// class MetalBottleMaker extends Bottle1{
//   constructor(name:string) {
//     super(name)
//   } 

//   getValue(){
//     console.log(this.name, this.age)
//   }
// }

// let b4 = new MetalBottleMaker('Natural')

// class BottleMaker {
//   protected name = 'natural'
// }

// class MetalBottleMaker extends BottleMaker{
//   public material = 'metal'

//   changeName(){
//     this.name = 'some other name'
//   }
// }

// let b4 = new MetalBottleMaker()


// class User1{
//   constructor(public readonly name:string){}

//   changeName(){
//     this.name = 'other'
//   }
// }

// let u1 = new User1('Saad')
// u1.changeName()

// class User1{
//   constructor(public name:string, public age:number, public gender?:string){}
// }

// let u1= new User1('Saad', 21, 'Male')
// let u2= new User1('Fahad', 20)


class User1{
  constructor(public _name:string, public age:number){}

  get name(){
    return this._name
  }

  set name(newVal:string){
    this._name = newVal
  }
  // getName(){
  //   return this.name;
  // }

  // setName(newVal:string){
  //   this.name = newVal;
  // }
}

let u1 = new User1('Saad', 23)
// u1.getName()
// u1.setName('Fahad')


class Hero{
  static version = 1.0;

   static getRandomNo(){
    return Math.random()
  }
}


class Payment{
  constructor(protected amount:number, protected account:number){}

  isPaymentValid(amount:number){
    return this.amount > 0;
  }
}

class Paytm extends Payment{

}

// Functions
// Funtion types
// Optional and default parameters
// Rest parameters
// Overloads

function aaa(name:string, cb: (value:string)=>void){

}

aaa('Saad', (value:string)=>{
  console.log(value)
})

// rest and spread operator 

function abs(...args:number[]){

}
abs(1,2,3,4,5,6)

function sum(...arr:number[]){
  console.log(arr)
}

sum(1,2,3,4,5,6,7,8,9,10)

function friends(...arr:string[]){
  console.log(arr)
}

friends('Saad', 'ALi')

var arr1 = [1,2,3,4]
var arr2 = [...arr1]


// ts function signature

function fun(a:string):void
function fun(a:string,b:number):number


function fun(a:any,b?:any){
  if(typeof a === 'string' && typeof b === undefined) {
    console.log('hey');
  }
  if(typeof a === 'string' && typeof b === 'number'){
    return 123;
  }
  else throw new Error('something is wrong')

}

fun('Saad', 21)
fun('Saad')