const apiKey = "your api key";

async function fetchData(India) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const temperature = data.min.temp;
    const weatherDesc = data.weather[0].description;

    console.log("hjfjjf");
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData(India);
