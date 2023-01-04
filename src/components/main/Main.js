import React from "react";
import "./Main.css";
import Category from "../category/category";

function Main() {
  return (
    <div>
      <div className="container-main">
        <div className="main-title">
          <span>Nom du restaurant</span>
          <span>Menu</span>
        </div>
      </div>
      <Category />
    </div>
  );
}

export default Main;
