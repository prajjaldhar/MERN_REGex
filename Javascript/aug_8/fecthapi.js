async function fetchdata() {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fake api is not working");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error occured: ", error);
  }
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
