import React, { useState } from "react";

const Formdata = () => {
  const [Data, SetFullData] = useState({
    Name: "",
    LName: "",
    Email: "",
    Mobile: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    SetFullData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
  };
  return (
    <div>
      <div>Temperature Converter</div>

      <form onSubmit={HandleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="Name"
            value={Data.Name}
            onChange={HandleChange}
          />
        </div>

        <div>
          <label>LName: </label>
          <input
            type="text"
            name="LName"
            value={Data.LName}
            onChange={HandleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            name="Email"
            value={Data.Email}
            onChange={HandleChange}
          />
        </div>

        <div>
          <label>Mobile: </label>
          <input
            type="text"
            name="Mobile"
            value={Data.Mobile}
            onChange={HandleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formdata;
