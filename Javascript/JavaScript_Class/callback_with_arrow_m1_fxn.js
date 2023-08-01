// const calculator = (a, b, operation) => {
//   return operation(a, b);
// };

// const add = (a, b) => {
//   return a + b;
// };

// console.log(calculator(5, 3, add));

// const calculator = (a, b, operation) => {
//   return operation(a, b);
// };

// console.log(
//   calculator(5, 3, (a, b) => {
//     return a + b;
//   })
// );

const calculator = (a, b, callback) => {
  return () => {
    return callback(a, b);
  };
};

const calc = calculator(5, 3, (a, b) => {
  return a + b;
});

console.log(calc());
