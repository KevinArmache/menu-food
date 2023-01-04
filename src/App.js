import { Component } from "react";
import "./App.css";
import Main from "./components/main/Main";

class App extends Component {
  state = {
    titre: "Mon Catalogue Voitures",
  };

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
