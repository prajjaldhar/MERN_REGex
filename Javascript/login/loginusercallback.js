function loginUser(username, password, onsucess, onfail) {
  setTimeout(() => {
    const valid = username === "User" && password === "Password";
    if (valid) {
      onsucess();
    } else {
      console.log("Invalid Credentials");
      onfail();
    }
  }, 2000);
}

loginUser(
  "Prajjal",
  "Password",
  () => {
    console.log("Login Successfull");
  },
  (error) => {
    console.log("Login failed: ", error);
  }
);
