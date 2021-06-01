
import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Run from './run.js';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES
    };
  }


  render() {
    return (
      <div>
        <div className="container pt-5" >
          < Run/>
        </div>
      </div>
    );
  }
}

export default App;
