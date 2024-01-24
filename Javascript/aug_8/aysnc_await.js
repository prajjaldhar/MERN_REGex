function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: "Prajjal",
        id: 3201,
        place: "Jaipur",
      });
    }, 5000);
  });
}

async function getuserInfo() {
  try {
    const data = await fetchdata();
    console.log("Data: ", data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getuserInfo();
