function entershop(callback) {
  console.log("Welcome to the ecommerce");
  callback();
}
function placeorder(callback) {
  console.log("Please place your order....you have 2000ms of time");
  setTimeout(() => {
    console.log("Order place");
    callback();
  }, 2000);
}

function Production(callback) {
  console.log("production started");
  setTimeout(() => {
    takeuserId(() => {
      createuserAccount(() => {
        listAllProducts(() => {
          console.log("Order and production completed successfully!!");
          callback();
        });
      });
    });
  }, 2000);
}

function takeuserId(callback) {
  console.log("Taking user Id");
  setTimeout(() => {
    console.log("User Id taken successfully!!!");
    callback();
  }, 2000);
}

function createuserAccount(callback) {
  console.log("creating user Account.....");
  setTimeout(() => {
    console.log("User account is created successfully!!!");
    callback();
  }, 3000);
}

function listAllProducts(callback) {
  console.log("Listing all products.....");
  setTimeout(() => {
    console.log("All products listed!!!");
    callback();
  }, 2000);
}

function realworld() {
  entershop(() => {
    placeorder(() => {
      Production(() => {
        console.log("Thankyou for shopping with us");
      });
    });
  });
}
realworld();
