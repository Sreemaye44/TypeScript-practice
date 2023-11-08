{
    //utility types
    //Pick 

    type Person={
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type Name=  Pick<Person, "name">
    type NameAge=Pick<Person, "name"|"age">



    //Omit

    type ContactInfo=Omit<Person, "name"|"age">

    //requires

    type PersonRequired = Required<Person>


    //partial

    type PersonPartial=Partial<Person>


    //read only
  type PersonReadOnly =Readonly<Person>

    const person1:Person = {
        name: "Mr. Xy",
        age: 200,
        contactNo: '01283927'
    }
    const person2: PersonReadOnly = {
      name: "Mr. Xy",
      age: 200,
      contactNo: "01283927",
    };

    person1.name= "Mr.ju";
    // person2.name= "Mr.ju";


    //Record

    type MyObj= Record<string,string>

   const EmptyObject:Record<string, unknown>={}

    const obj1: MyObj={
        a:'aa',
        b:'bb',
        c:'cc',
        d: 'dd'
    }

}