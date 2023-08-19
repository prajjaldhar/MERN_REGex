function placeorder(orderDetails) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orderNumber = 31566540;
      resolve(
        `Order ${orderNumber} placed successfully with order details ${orderDetails}`
      );
    }, 2000);
  });
}
function startProduction(orderNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Order ${orderNumber} is now in production}`);
    }, 2000);
  });
}
placeorder("2x t-shirt, 1x Jeans ")
  .then((orderConfirm) => {
    console.log(orderConfirm);
    const orderNumber = 31566540;

    return startProduction(orderNumber);
  })
  .then((productionStatus) => {
    console.log(productionStatus);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Finally done");
  });
