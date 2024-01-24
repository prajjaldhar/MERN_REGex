import logo from "./logo.svg";
import "./App.css";
import AddProductForm from "./AddProductForm";
import ProductForm from "./ProductForm";
import GetProducts from "./GetProducts";

function App() {
  return (
    <div className="App">
      <AddProductForm />
      <GetProducts />
    </div>
  );
}

export default App;
