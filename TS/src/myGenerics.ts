const score:Array<number> = []
const names:Array<string> = []

function identiyOne(val:boolean | number): boolean | number {
    return val   
}

function identityTwo(val:any):any {
    return val
}

function identityThree<Type>(val:Type): Type {
    return val
}

identityThree(3)
identityThree('3')
identityThree(true)

function identityFour<T>(val:T): T {
    return val
}

interface Bootle {
    brand:string,
    type:number
}

// identityFour<Bootle>({})

function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3;
    if (products[myIndex] === undefined) {
        throw new Error("Product at index 3 does not exist.");
    }
    return products[myIndex]; // Now it's T, not T | undefined
}


const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some operation
    const myIndex = 4
    if (products[myIndex] === undefined) {
        throw new Error("Product at index 3 does not exist.");
    }
    return products[myIndex]
}

interface Database {
    connection:string,
    username:string,
    password:string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3,'4')
// anotherFunction(2, {})



interface Quiz {
    name:string,
    type:string
}

interface Course {
    name:string,
    author:string,
    subject:string
}

class Sellable<T> {
   public cart: T[] = []
   
   addToCart(products:T) {
    this.cart.push(products)
   }
}