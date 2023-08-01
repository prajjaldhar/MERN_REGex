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
      resolve(kulcha);
    }, 15000);
  });
}

async function functionName() {
  try {
    const allo = await getallo();
    console.log("Recieved packet allo", allo);

    const dough = await makedough(allo);
    console.log("recieved packet dough", dough);

    const kulcha = await makeAlloKulcha(allo, dough);
    console.log("kulcha is ready to serve", kulcha);
  } catch (error) {
    console.log("error: ", error);
  } finally {
    console.log("I am done");
  }
}

functionName();
