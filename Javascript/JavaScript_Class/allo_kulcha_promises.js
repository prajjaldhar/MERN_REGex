function getallo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const allo = "🥔";
      console.log("here we got the allo", allo);
      resolve(allo);
    }, 5000);
  });
}

function makedough(allo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = allo + "🍩";
      console.log("dough is ready and here is the raw dough", dough);
      resolve(dough);
    }, 10000);
  });
}

function makeAlloKulcha(allo, dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kulcha = allo + dough + "🥪";
      console.log("kulcha is fried and then kulcha is ready", kulcha);
      reject(kulcha);
    }, 15000);
  });
}

getallo()
  .then((allo) => {
    console.log("got the allo", allo);
    return makedough(allo).then((dough) => {
      console.log("dough is ready, go for the next step", dough);
      return makeAlloKulcha(allo, dough);
    });
  })
  .then((kulcha) => {
    console.log("kulcha is ready to serve", kulcha);
  })
  .catch((error) => {
    console.log("error occurred", error);
  })
  .finally(() => {
    console.log("Shop is closed, day ended");
  });
