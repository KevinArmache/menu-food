import { Component } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Food from "./components/food/food";

class App extends Component {
  state = {
    titre: "Mon Catalogue Voitures",
  };

  render() {
    return (
      <div className="App">
        <Main />
        <Food />
      </div>
    );
  }
}

export default App;
