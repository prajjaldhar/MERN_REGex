import React, { useContext } from "react";
import BComponent from "./BComponent";
import DataContext from "./DataContext";
import RecieveContext from "./RecieveContext";

const AComponent = () => {
  const Vasihatnama =
    "mera grand children ko 4,00,000cr mai bhet swroop deta hoon";
  const Data = useContext(RecieveContext);
  return (
    <DataContext.Provider value={Vasihatnama}>
      <div>
        AComponent {Data}
        <BComponent />
      </div>
    </DataContext.Provider>
  );
};

export default AComponent;
