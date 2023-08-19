function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching data from api");
      const data = { name: "Ravi", Roll: "3210", Class: "Batch D" };
      reject(data);
    }, 3000);
  });
}

function cancelDataFetching() {
  const cancelled = Promise.resolve("Data fectching is stopped");
  return cancelled;
}

const condition = true;

if (condition) {
  fetchdata()
    .then((data) => {
      console.log("Fetched data: ", data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
} else {
  cancelDataFetching()
    .then((result) => {
      console.log("Resolved: ", result);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
