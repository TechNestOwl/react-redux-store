import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import IndividualProductPage from "./components/IndividualProductPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/about" component={About}/>
          <Route path="/product_page" component={IndividualProductPage}/>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
