interface User  {
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string
    startTrail:() => string
    // startTrail():string
    getCoupon(couponname:string, value:number):number
}

interface User {
    githubToken:string
}

interface Admin extends User {
    role:'admin' | 'ta' | 'learner'
}

const saad: User =  {dbId:22, email:'saad.com', userId:123,
    githubToken: 'github',
    startTrail:() => {
        return 'Go Now'
    },
    getCoupon:(name: 'saad', off: 10) => {
        return 10
    }
}

saad.email = 'itmesadd@gmail.com'
// saad.dbId = 222


const saad2: Admin =  {dbId:22, email:'saad.com', userId:123,
    githubToken: 'github',
    role:'admin', 
    startTrail:() => {
        return 'Go Now'
    },
    getCoupon:(name: 'saad', off: 10) => {
        return 10
    }
}
