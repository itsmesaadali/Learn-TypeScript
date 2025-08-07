// class User {
//     public email:string
//     private name:string
//     private readonly city:string = 'ISB'
//     constructor(email:string, name:string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    email;
    name;
    city = 'ISB';
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const saad = new User('itmesaad@gmail.com', 'Saad');
export {};
// saad.name 
//# sourceMappingURL=index.js.map