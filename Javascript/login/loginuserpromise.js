function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const valid = username === "User" && password === "Password";
      if (valid) {
        resolve();
      } else {
        console.log("Invalid Credentials");
        reject();
      }
    }, 2000);
  });
}

loginUser("User", "Password")
  .then(() => {
    console.log("Login Successfull");
  })
  .catch((error) => {
    console.log("Error Occured:", error);
  });
