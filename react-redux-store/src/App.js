import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/about" component={About}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/productpage" component={ProductPage}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
