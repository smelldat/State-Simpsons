import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            working: false
        };
    }
    handleClick = () => {
        this.setState({ working: !this.state.working });
    };


  render() {
        const work = this.state.working ? 'work' : 'pause';
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className={work} alt="logo" />
            <h1 className="App-title">Simpsons Quotes</h1>
              <button className={"btn btn-primary"} onClick={this.handleClick}>
                  {work.toUpperCase()}
              </button>
          </header>

            <Lamp on/>
            <Lamp />
            <Quotes/>
        </div>
    );
  }
}

export default App;