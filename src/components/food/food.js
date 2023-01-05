import React from "react";
import "./food.css";
import photo from "../../assets/téléchargement.jpeg";
import data from "../../json/food.json";

function Food() {
  return (
    <div>
      <div className="container-foods">
        {data.map((element) => {
          // {
          //   console.log(element);
          // }
          return (
            <div key={element.id} className="container-category">
              <h3 id={`category-title-` + element.category}>
                {element.category}
              </h3>
              <hr />
              <div className="box-food">
                {element.plats.map((element) => {
                  return (
                    <div key={element.id} className="food">
                      <img src={photo} alt="Burger" />
                      <div className="container-description">
                        <span className="name-food">{element.name}</span>
                        <hr className="line-food" />
                        <span className="price-food">
                          Prix: {element.price}
                        </span>
                        <br />
                        <span className="description-food">
                          {element.description}
                          {/* Salade + Frite + Steak + Tomates + fromages */}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Food;
