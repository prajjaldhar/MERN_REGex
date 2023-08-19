const promise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 2000);
});

//const clearedPromise = Promise.reject("Promise rejected");
const clearedPromise = Promise.resolve("Promise resolved");

clearedPromise
  .then((result) => {
    console.log("Resolve: ", result);
  })
  .catch((error) => {
    console.log("Rejected: ", error);
  })
  .finally(() => {
    console.log("Work done");
  });
