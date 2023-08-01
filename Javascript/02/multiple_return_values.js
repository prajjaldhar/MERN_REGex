// function getpersonId() {
//   return {
//     Name: "jhon sinha",
//     age: 30,
//     occupation: "Mern Stack Dev",
//   };
// }
// const person = getpersonId();
// console.log(person.Name + " " + person.age);
// console.log(person.age);
// console.log(person.occupation);

//example 2
// function getNumbers() {
//   return [1, 2, 3, 4, 5];
// }
// const numbers = getNumbers();
// console.log(number[0]);

//using Destructuring
function getpersonId() {
  return {
    Name: "jhon sinha",
    age: 30,
    occupation: "Mern Stack Dev",
  };
}
const { Name, age, occupation } = getpersonId();
console.log(Name + " " + age + " " + occupation);
