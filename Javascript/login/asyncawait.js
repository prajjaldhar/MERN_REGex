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

async function processLogin() {
  try {
    await loginUser("Users", "Password");
    console.log("login successfull");
  } catch (error) {
    console.log("Error Occured:", error);
  }
}

processLogin();
