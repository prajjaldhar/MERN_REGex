function sendmessage(message) {
  return new Promise((resolve, reject) => {
    console.log("MEssage:", message);
    setTimeout(() => {
      const valid = true;
      if (valid) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

function retrievemesage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = ["Hi Prajjal"];
      resolve();
    }, 2000);
  });
}

sendmessage("Hi Prajjal")
  .then(() => retrievemesage())
  .then((message) => {
    console.log("Message:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
