//Async and Await

let choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("started async"));
    }, 2000);
  });
};

async function kitchen() {
  console.log("A");
  console.log("B");
  await choice();
  console.log("c");
  console.log("d");
}

kitchen();
console.log("Other work");
console.log("Other work2");
