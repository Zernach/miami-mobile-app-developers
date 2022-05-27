import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Miami Mobile App Developers</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <LambdaDemo /> */}
        </header>
      </div>
    )
  }
}

export default App
