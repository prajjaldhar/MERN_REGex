async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchData();

// async function getWeatherData() {
//   const apiKey = "0c6097fadf434662b0792740232108";
//   const location = "India";
//   const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

//   try {
//     const response = await fetch(apiUrl);
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       throw new Error(
//         `Error fetching weather data. Status: ${response.status}`
//       );
//     }
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
// }

// (async () => {
//   const weatherData = await getWeatherData();
//   console.log(weatherData);
// })();

// async function getWeatherData(location) {
//     const apiKey = '0c6097fadf434662b0792740232108';
//     const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

//     try {
//         const response = await fetch(apiUrl);
//         if (response.ok) {
//             const data = await response.json();
//             return data;
//         } else {
//             throw new Error(`Error fetching weather data. Status: ${response.status}`);
//         }
//     } catch (error) {
//         console.error('An error occurred:', error.message);
//     }
// }

// (async () => {
//     const states = ['Maharashtra', 'Karnataka', 'Tamil Nadu']; // Add more states as needed
//     for (const state of states) {
//         const weatherData = await getWeatherData(state);
//         console.log(`Weather in ${state}:`, weatherData);
//     }
// })();
