const placeorder = (callback) => {
  setTimeout(() => {
    console.log("Order placed");
    callback();
  }, 2000);
};

const startProduction = (callback) => {
  setTimeout(() => {
    console.log("Production started");
    callback();
  }, 5000);
};

const printID = (callback) => {
  setTimeout(() => {
    console.log("Id printed");
    callback();
  }, 5000);
};

const productName = (callback) => {
  setTimeout(() => {
    console.log("productName printed");
    callback();
  }, 5000);
};

const productDesc = (callback) => {
  setTimeout(() => {
    console.log("productDesc printed");
    callback();
  }, 5000);
};

console.log("Order is now going to take");
placeorder(()=>{
  console.log('pass to production');
  startProduction(()=>{
    console.log('passing to id');
    printID(()=>{
      console.log('pass to product name');
      productName(()=>{
        console.log('pass to product desc');
        productDesc(()=>{
          console.log('All task done');
        })
      })
    })
  })
})
