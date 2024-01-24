const addveggies = (callback) => {
  setTimeout(() => {
    const veggies = "🌿";
    console.log("Veggies prepared", veggies);
    callback(veggies);
  }, 3000);
};

const addTikki = (veggies, callback) => {
  setTimeout(() => {
    const Tikki = veggies + "🍅";
    console.log("Tikki prepared", Tikki);
    callback(Tikki);
  }, 3000);
};

const makeBurger = (veggies, Tikki, callback) => {
  setTimeout(() => {
    const Burger = veggies + Tikki + "🍞";
    console.log("Burger prepared", Burger);
    callback(Burger);
  }, 3000);
};

addveggies((veggies) => {
  console.log("Preparing for tikki started");
  addTikki(veggies, (Tikki) => {
    console.log("Preparing for Burger started");
    makeBurger(veggies, Tikki, (Burger) => {
      console.log("Burger is Served");
    });
  });
});
