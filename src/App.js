import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Product from './components/Product';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Productlist}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route  component={Default}/>
      </Switch>
    
    
    </React.Fragment>
  );
}

export default App;
