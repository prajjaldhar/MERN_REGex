import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [data, setdata] = useState(null);
  const HandleChild = (children) => {
    setdata(children);
  };
  return (
    <div>
      <ChildComponent onDataFromChild={HandleChild} />
      <p>{data}</p>
    </div>
  );
};

export default ParentComponent;
