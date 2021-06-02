import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import IndividualProductPage from "./components/IndividualProductPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ProductsPage from "./components/ProductsPage";



function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <ProductsPage />
      <About />
      <IndividualProductPage />
      <Footer />
      
    </div>
  );
}

export default App;
