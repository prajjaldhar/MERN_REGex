import React, { useContext } from "react";
import DataContext from "./DataContext";
import RecieveContext from "./RecieveContext";

const DComponent = () => {
  const sharedData = useContext(DataContext);
  const recivedInfomation = "mujhe aapka property mil gaya hai";
  return (
    <RecieveContext.Provider value={recivedInfomation}>
      <div>
        DComponent
        <p>Property Recived from Grand Parent: {sharedData}</p>
      </div>
    </RecieveContext.Provider>
  );
};

export default DComponent;
