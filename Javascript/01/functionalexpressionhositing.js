//No-hoisting
sayhello();
var sayhello = function () {
  console.log("goodbye");
};
