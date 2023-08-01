add();
area();
function add() {
  mul();
  console.log("add over");
}
function mul() {
  sub();
  console.log("mul over");
}
function sub() {
  div();
  console.log("sub over");
}
function area() {
  console.log(`I'm area`);
}
function div() {
  console.log(`I'm done`);
}
