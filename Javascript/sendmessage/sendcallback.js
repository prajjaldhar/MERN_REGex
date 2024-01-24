function sendmessage(message, onsucess, onfail) {
  console.log("MEssage:", message);
  setTimeout(() => {
    const valid = true;
    if (valid) {
      onsucess();
    } else {
      onfail();
    }
  }, 2000);
}

function retrievemesage(onsucess, onfail) {
  setTimeout(() => {
    const message = ["Hi Prajjal"];
    onsucess();
  }, 2000);
}

sendmessage(
  "Hi Prajjal",
  () => {
    retrievemesage(
      (message) => {
        console.log("Message:", message);
      },
      (error) => {
        console.log("Error:", error);
      }
    );
  },
  (error) => {
    console.log("Login failed: ", error);
  }
);
