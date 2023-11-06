{
  //type assertion

  let anything: any;
  anything = "Next Level Web development";
  anything = 3333;
  (anything as string).split("");
  (anything as number).toString();

  const kgToGm = (value: string | number) => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  type CustomError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}

{
  //interface

  type rollNumber = number; //alias

  type User1 = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string }; //adding new property with user1/user2 using alias

  interface UserWithRole2 extends User2 {
    //adding new property with user2/user1 using interafce
    role: string;
  }

  const user1: User2 = {
    name: "Persina",
    age: 100,
  };
  const user2: UserWithRole2 = {
    name: "Persina",
    age: 100,
    role: "admin",
  };

  //difference between type alias and interface
  //you can't define primitive/non-object using interface but you can define both object(object/array) and non object using alias

  //--------------For Array Interface------------------------//

  type Roll1 = number[];

  const rollNumber1: Roll1 = [1, 2, 3];

  interface Roll2 {
    [index: number]: number;
  }

  //------------- for function--------------------///
   type Add1=(num1: number, num2: number)=>number
   
    interface Add2 {
      (num1:number, num2:number) : number
    }
}
