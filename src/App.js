import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
// import ProductScreen from "./screens/ProductScreen";
// import CartScreen from "./screens/CartScreen";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          {/* <Route path="/product/:id" component={ProductScreen} /> */}
          {/* <Route path="/cart/:id?" component={CartScreen} /> */}
          <Route path="/" component={HomeScreen} exact />
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
