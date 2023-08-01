const calc = (a, b, operation) => {
  return operation(a, b);
};

console.log(
  calc(3, 4, function (a, b) {
    return a + b;
  })
);
