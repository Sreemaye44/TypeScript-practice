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
