//string
let firstName: string='sree'

//number

let roll: number= 123

//undefined

let x: undefined=undefined

//null

let y: null = null

//boolean

let isAdmin: boolean=true

//any is not recommended

let d: any
d=23
d="dswd"


//Non primtive

//Array

let friends: string[]=['race', 'play']
let listRoll: number[]=[2,3,21];

//tuple ---> array --> have order

let coOrdinate:[number, number]=[1,2]

let ageName:[number, string, boolean]=[1,'lata', true ]

//Reference type--> Object

const user: {
  company: 'Programming Hero'; //literal types
  readonly isMarried: boolean
  firstName: string;
  middleName?: string; //optional type
  lastname: string;
} = {
  company: 'Programming Hero',
  isMarried: true,
  firstName: "Sreemaye",
  lastname: "Tama",
};

// user.isMarried = false  can't access this readonly value or changed

//fUNCTION
//Normal Function

function add(num1:number, num2:number): number{
  return num1 + num2;
}
add(2, 2)



//Arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

const poorUser = {
  name: 'Sreemaye',
  balance: 0,
  addBalance(balance: number):string {
    return `my new balance is: ${this.balance + balance}`;
  }
}

const arr: number[] = [1, 4, 10];
const newAr: number[] = arr.map((el: number): number => el * el)

//spread operator
const bros1: string[] = ['leena', 'meena', 'pina'];
const bros2: string[] = ['Teena', 'Deena', 'Sina'];
bros1.push(...bros2)

const mentors1 = {
  typeScript: 'Mazba',
  redux: 'Mir',
  dbms: 'Mizan'
}

const mentors2 = {
  prisma: 'Firoz',
  next: 'tanmoy',
  cloud: 'Nahid'
}

const mentorList = {
  ...mentors1, ...mentors2
   
}

//rest operator

const greetFriends = (...friends:string[])=>{
  // console.log(`Hi ${friend1} ${friend2} ${friend3}`)
  friends.forEach((friend: string)=>console.log(`${friend}`))
}
greetFriends("Abul", 'kabul', 'gabul')

//destructuring

// object destructuring

const poet = {
  id: 232,
  name: {
    firstName: 'sreemaye',
    middleName: 'Chakrabortty',
    lastName: 'Tama',
    
  },
  contactNo: "0912830",
  address: 'Uganda'
};

const { contactNo, name: { lastName: lName } } = poet //here it is called alias that lastname->lName, so in destructuring you can not declare type

const myFriends = ['chanda', 'manda', 'ganda', 'rachel', 'monika', 'phobe']

const [, best, ...rest] = myFriends;
