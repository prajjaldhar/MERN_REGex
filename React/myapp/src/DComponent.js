import React, { useContext } from "react";
import DataContext from "./DataContext";

const DComponent = () => {
  const sharedData = useContext(DataContext);
  return (
    <div>
      DComponent
      <p>Property Recived from Grand Parent: {sharedData}</p>
    </div>
  );
};

export default DComponent;
