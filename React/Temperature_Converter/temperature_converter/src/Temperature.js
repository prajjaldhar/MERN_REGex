import React, { useState } from "react";

const Temperature = () => {
  const [Celcius, SetCelcius] = useState(0);
  const [Farenhiet, SetFarenhiet] = useState(32);
  const HandleFarenhiet = (e) => {
    const value = e.target.value;
    SetFarenhiet(value);
    SetCelcius(ftoc(value));
  };
  const HandleCelcius = (e) => {
    const value = e.target.value;
    SetCelcius(value);
    SetFarenhiet(ctof(value));
  };

  const ftoc = (Farenhiet) => {
    return ((Farenhiet - 32) * 5) / 9;
  };

  const ctof = (Celcius) => {
    return (Celcius * 9) / 5 + 32;
  };

  return (
    <div>
      <div>Temperature Converter</div>
      <div>
        <label>Celcius: </label>
        <input type="text" value={Celcius} onChange={HandleCelcius} />
      </div>
      <div>
        <label>Farenheit: </label>
        <input type="text" value={Farenhiet} onChange={HandleFarenhiet} />
      </div>
    </div>
  );
};

export default Temperature;
