{
  //generic type with type alias
  //________________________________________________________________________________________________

  // const mentors: string[]=['Mr.X', 'Mr.Y', 'Mr.Z'];
  const mentors: Array<string> = ["Mr.X", "Mr.Y", "Mr.Z"];

  const boolAray: boolean[] = [true, false, true];

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[]=[3,6,8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];
  const boolArray: GenericArray<boolean> = [true, false, true];

  //Arry of object using generic

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "lina",
      age: 20,
    },
    {
      name: "Tina",
      age: 50,
    },
  ];

  //Generic Tuple

  const Manush: [string, string] = ["Mr. X", "Mr. Y"];

  type GenericTuple<X, Y> = [X, Y];
  const Manus: GenericTuple<string, string> = ["Mr. X", "Mrs. X"];

  const UserWithId: GenericTuple<number,{name: string, email: string}> = [12334, {name: 'hasi', email: 'er@gmail.com'}]

  //-------------> When the object will be large, then make the interface/type


  interface User{
    name: string;
    email: string;
  }

   const UserWithId1: GenericTuple<number, User> = [
     12334,
     { name: "hasi", email: "er@gmail.com" },
   ];
}

  //generic type with interface 
  //________________________________________________________________________________________________
{
  

    interface Developer<T,Y=null>{
        name: string,
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }

        smartWatch: T,
        bike? : Y,
    }

    type Emilab = {
      brand: string;
      model: string;
      display: string;
    };

   

    const poorDeveloper: Developer<Emilab> = {
      name: "Sree",
      computer: {
        brand: "Asus",
        model: "X234bd34",
        releaseYear: 1987,
      },

      smartWatch: {
        brand: "emilab",
        model: "fhw324nj",
        display: "ammulate",
      },
    };
     type Apple = {
       brand: string;
       model: string;
       heartTrack: boolean;
       sleepTrack: boolean;
     };
     interface YamahaBike{
        model: string,
        engineCapacity: string

     }
    const richDeveloper: Developer<Apple, YamahaBike> = {
      name: "Rich",
      computer: {
        brand: "Mac",
        model: "X2d34",
        releaseYear: 1987,
      },

      smartWatch: {
        brand: "Apple",
        model: "324nj",
        heartTrack: true,
        sleepTrack: true,
      },

      bike: {
        model: "yamaha",
        engineCapacity: "100CC",
      },
    };
}
