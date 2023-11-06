//function with generic

{
  const createArray = (params: string): string[] => {
    return [params];
  };
  const createArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };

  const result1 = createArray("bangladesh");

  const result2 = createArrayWithGeneric<string>("bangladesh");
  const result3 = createArrayWithGeneric<boolean>(true);

  type User = {
    id: number;
    name: string;
  };
  const result4 = createArrayWithGeneric<User>({ id: 222, name: "Mr. Pasan" });
}

{
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result2 = createArrayWithTuple<string, number>("bangladesh", 1971);
  const result3 = createArrayWithTuple<string, { name: string }>("bd", {
    name: "sree",
  });
}

{
  const addCourseToStudent = <T>(student: T) => {
    const course = "next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1=addCourseToStudent({name: 'Mr.X', email: 'X@gmail.com', devType: 'next level webdev'})
  const student2=addCourseToStudent({name: 'Mr.Y', email: 'Y@gmail.com', devType: 'next level webdev', hasWatch: "Apple "})
}
