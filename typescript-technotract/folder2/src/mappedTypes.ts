//mappped types

const arrOfNumbers: number[]=[1,2,4];

// const arrOfStrings: string[]=['1','2','3'];

const arrOfString: string[]=arrOfNumbers.map(numbers=>numbers.toString());
console.log(arrOfString)


type AreaString={
    height: string;
    width: string;
}
// type AreaNumber={
//     height: number;
//     width: number;
// }

// type AreaNumber={
//     [key in "height"| "width"]: number
// }

type Height=AreaString["height"]  //lookup type

// type AreaNumber = {
//   [key in keyof AreaString]: string;
// };

type AreaNumber<T>={
    [key in keyof T]: T[key]
}

const area1: AreaNumber<{height:string; width: number}>={
    height: "78",
    width: 23
}
