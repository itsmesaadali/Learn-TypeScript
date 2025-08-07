// const user: (number | string)[] = [1,'sa']

let user: [string, number, boolean]

user = ['sa', 1, true]
// user = [true, 123, 'fg']

let rgb:[number, number, number] = [255, 255, 255]

type User = [number, string]

const newUser: User = [112,'me@gmail.com']

newUser[1] = 'sa.com'
// newUser.push(true)
