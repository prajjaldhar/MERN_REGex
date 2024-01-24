import React, { useState, useEffect } from "react";
import "./CovidData.css";

function CovidData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://data.covid19india.org/v4/min/data.min.json"
        );
        const jsonData = await response.json();
        console.log(jsonData);

        // Extract state-wise data from the JSON response
        const stateData = Object.entries(jsonData);
        console.log(stateData);

        // Create an array of state objects with name and data
        const states = stateData.map(([stateName, stateData]) => ({
          name: stateName,
          confirmed: stateData.total.confirmed || 0,
          deceased: stateData.total.deceased || 0,
          recovered: stateData.total.recovered || 0,
        }));

        console.log(states);
        setData(states);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="covid-data-container">
      <h1>COVID-19 Data</h1>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Total Confirmed</th>
            <th>Total Deceased</th>
            <th>Total Recovered</th>
          </tr>
        </thead>
        <tbody>
          {data.map((state) => (
            <tr key={state.name}>
              <td>{state.name}</td>
              <td>{state.confirmed}</td>
              <td>{state.deceased}</td>
              <td>{state.recovered}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CovidData;
