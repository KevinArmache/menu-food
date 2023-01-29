import "./category.css";
import React from "react";
import data from "../../json/category.json";
function category() {
  return (
    <div>
      <div className="container-category">
        <ul>
          {data.map((element) => {
            return (
              <li key={element.id}>
                <a href={`#category-id-` + element.id}>{element.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default category;
