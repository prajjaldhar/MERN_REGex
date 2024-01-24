function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function placeorder() {
  await delay(2000);
  console.log("Order Taken");
}

async function startProduction() {
  await delay(2000);
  console.log("production started");
}

async function printID() {
  await delay(2000);
  console.log("Id Printed");
}

async function productName() {
  await delay(2000);
  console.log("Name Taken");
}

async function productDesc() {
  await delay(2000);
  console.log("Description taken");
}

async function main() {
  console.log("Order is now going to take place");
  await placeorder();
  console.log("Product is in production...");
  await startProduction();
  console.log("Id Printing started...");
  await printID();
  console.log("Product Name started Printing...");
  await productName();
  console.log("Product Description started printing...");
  await productDesc();
}
main();
