// Generic Function `returnTypeEx`
function returnTypeEx<T>(val: T): T {
    return val;
}
  console.log(returnTypeEx<number>(100)); 
  console.log(returnTypeEx<string>("Elzero")); 
  // Arrow Function with Generics `returnTypeArrowSyntax`
  const returnTypeArrowSyntax = <T>(val: T): T => val;
  console.log(returnTypeArrowSyntax<number>(100)); 
  console.log(returnTypeArrowSyntax<string>("Elzero")); 
// Generic Function `testType`
  function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
  console.log(testType<number>(100));
  console.log(testType<string>("Elzero"));
  // Generic Function `multipleTypes`
  function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
  console.log(multipleTypes<string, number>("Osama", 100));
  console.log(multipleTypes<string, boolean>("Elzero", true));