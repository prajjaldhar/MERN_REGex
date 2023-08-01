function getallo(callback) {
  setTimeout(() => {
    const allo = "🥔";
    console.log("here we got the allo", allo);
    callback(allo);
  }, 5000);
}

function makedough(allo, callback) {
  setTimeout(() => {
    const dough = allo + "🍩";
    console.log("dough is ready and here is the raw dough", dough);
    callback(dough);
  }, 10000);
}

function makeAlloKulcha(allo, dough, callback) {
  setTimeout(() => {
    const kulcha = allo + dough + "🥪";
    console.log("kulcha is ready", kulcha);
    callback(kulcha);
  }, 15000);
}

getallo((allo) => {
  makedough(allo, (dough) => {
    makeAlloKulcha(allo, dough, (kulcha) => {
      console.log("Kuch is Served");
    });
  });
});
