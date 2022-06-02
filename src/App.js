import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="top-header">
          {"Miami Mobile App Developers"}
        </h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ color: "#FF69B4" }}>
            {"South Beach, Miami 🏝"}
          </h1>
          <h2 style={{ color: "white" }}>
            {"First Evening of Every Month (2022)"}
          </h2>

          <div style={{ marginTop: 40 }}>
            {[
              {
                month: "July",
                day: "Friday"
              },
              {
                month: "August",
                day: "Monday"
              },
              {
                month: "September",
                day: "Thursday"
              },
              {
                month: "October",
                day: "Saturday"
              },
              {
                month: "November",
                day: "Tuesday"
              },
              {
                month: "December",
                day: "Thursday"
              }
            ].map(event => (
              <div>
                <h3 style={{ color: "#61dafb", marginTop: -30 }}>
                <text style={{color: "grey"}}>{`${event.day}, `}</text>
                  {`${event.month} 1st `}
                  <text>{"2022"}</text>
                </h3>
              </div>
            ))
            }
          </div>
          <h3>
            {"Organized by "}
            <a href="https://ryan.zernach.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#72FA41" }}>
              {"Ryan Zernach"}
            </a>
          </h3>
        </header>
      </div>
    )
  }
}

export default App
