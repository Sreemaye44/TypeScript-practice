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
  firstName: string;
  middleName?: string; //optional type
  lastname: string;
} = {
  firstName: "Sreemaye",
  lastname: "Tama",
};


