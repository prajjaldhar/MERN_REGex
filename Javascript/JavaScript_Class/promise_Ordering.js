const placeorder = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Order placed");
      resolve();
    }, 2000);
  });
};

const startProduction = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Production started");
      reject();
    }, 5000);
  });
};

const printID = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Id printed");
      resolve();
    }, 5000);
  });
};

const productName = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("productName printed");
      resolve();
    }, 5000);
  });
};

const productDesc = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("productDesc printed");
      resolve();
    }, 5000);
  });
};

console.log("Order is now going to take");
placeorder()
  .then(() => {
    console.log("Product is in production...");
    return startProduction();
  })
  .then(() => {
    console.log("Id Printing started...");
    return printID();
  })
  .then(() => {
    console.log("Product Name started Printing...");
    return productName();
  })
  .then(() => {
    console.log("Product Description started printing...");
    return productDesc();
  })
  .catch((error) => {
    console.log("Errror", error);
  });
