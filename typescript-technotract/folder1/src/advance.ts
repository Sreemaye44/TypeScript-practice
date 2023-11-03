//type-Alias

type Student =  {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string

} 
const student1: Student= {
    name: 'Tina',
    age: 43,
    gender: 'female',
    contactNo: '982374212321',
    address: 'ctg'

} 
const student2:Student= {
    name: 'porina',
    age: 53,
    gender: 'male',
    address: 'dhaka'

}

type UserName = string
type IsAdmin = boolean
const userName: UserName = 'persian'
const issAdmin: IsAdmin = true


////////important///////////////
//for function type alias
type Add=(num1:number, num2:number)=>number
const addTwo: Add = (num1, num2) => num1 + num2;

//UNION TYPES

type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

type Developer = FrontendDeveloper | FullStackDeveloper

const newDeveloper: FrontendDeveloper = 'juniorDeveloper'


type User = {
    name: string;
    email: string;
    gender: 'male' | 'female';
    bloodGroup: "O+" |"A+"|"AB+"
}

const user1: User = {
    name: 'Rai',
    email: 'rai@gmail.com',
    gender: 'female',
    bloodGroup: "O+"
}

//intersection type \

type FFrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer'
}
type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer'
}

type FullStackDevelopers = FFrontendDeveloper & BackendDeveloper

const fullDevelopers: FullStackDevelopers = {
    skills: ['html', 'css'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}

