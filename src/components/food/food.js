import React from "react";
import "./food.css";
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
                    <div key={element.id} className="food wrapper six">
                      <img
                        className="src-food"
                        src={require(`../../assets/${element.src}`)}
                        alt="Burger"
                      />
                      <div className="container-description">
                        <span className="name-food flicker">
                          {element.name}
                        </span>
                        <hr className="line-food" />
                        <span className="price-food">
                          Prix: {element.price}
                        </span>
                        <br />
                        <hr className="line-food" />

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
