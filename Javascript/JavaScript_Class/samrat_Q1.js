//question--> using arrow function use callback to generate product of 2 numbers

const pro = (a, b, operation) => {
  return operation(a, b);
};
console.log(
  pro(4, 5, (a, b) => {
    return a * b;
  })
);
