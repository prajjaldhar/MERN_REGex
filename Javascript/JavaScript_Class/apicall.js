const apiKey = "0a88833b630c6eef22b68f28747b5750";
const url = "https://jsonplaceholder.typicode.com/todos";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
