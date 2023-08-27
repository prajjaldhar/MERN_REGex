import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import CardImage from "./CardImage";
import ParentComponent from "./ParentComponent";
import AComponent from "./AComponent";
// import imagedata from "./imagedata";

// const ncard = (val) => {
//   return (
//     <CardImage
//       key={val.id}
//       title={val.title}
//       imgsrc={val.images[1]}
//       desc={val.price}
//     />
//   );
// };

function App() {
  // const [Data, SetData] = useState([]);
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
  //       const response = await fetch("https://dummyjson.com/products");
  //       const Data = await response.json();
  //       console.log(Data.products);
  //       SetData(Data.products);

  //       // // Convert the object to an array of objects
  //       // const dataArray = Object.keys(fetchedData).map((id) => ({
  //       //   id,
  //       //   ...fetchedData[id],
  //       // }));
  //     } catch (error) {
  //       console.log("Error occured", error);
  //     }
  //   };
  //   fetchdata();
  // }, []);

  return (
    // <div className="container">
    //   <NavBar />
    //   <div className="row">
    //     {Data.map((val, index) => (
    //       <div key={val.id} className="col-md-3">
    //         {ncard(val)}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // <ParentComponent />
    <AComponent />
  );
}

export default App;
