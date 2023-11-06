
///constraints

{
     const addCourseToStudent = <T extends {name: string, id: number, email: string}>(student: T) => {
       const course = "next Level Web Development";

       return {
         ...student,
         course,
       };
     };

    //  const student3=addCourseToStudent({emni: 'emni'})

     const student1 = addCourseToStudent<{
       id: number;
       name: string;
       email: string;
       devType: string;
     }>({
       id: 222,
       name: "Mr.X",
       email: "X@gmail.com",
       devType: "next level webdev",
     });
     const student2 = addCourseToStudent({
       id: 333,
       name: "Mr.Y",
       email: "Y@gmail.com",
       devType: "next level webdev",
       hasWatch: "Apple ",
     });
}

//generic constraint with keyof operator


type Vehicle={
    bike: string;
    car: string;
    ship: String;
}   
type Owner="bike" | "car" |"ship"

type Owner2=keyof Vehicle

const person1: Owner2="car"
const person2: Owner="car"


function getPropertyValue=<X,Y extends keyof X>(obj: X, key:Y)=>{
       return obj[key]
}

const user98={
    name: "Mr. UI",
    age: 26,
    address: 'ctg'

}

const result23=getPropertyValue(user98, 'name')


//user98["name"]