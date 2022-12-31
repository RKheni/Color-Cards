import React, { useState } from "react";
import "../styles.css";
import changeColor from "../Color.json";
import CardItem from "./CardItem.js";

export default function Cards(props) {
  const [color, setColor] = useState("");

  return (
    <>
      <div>
        {/* Display selected color code */}
        <h1>{color}</h1>
        <div className="container">
          {/* Display cards which color code start with "#f" */}
          {changeColor.colorItem.map((element, key) => {
            if (element.value.includes("#f")) {
              return (
                <CardItem
                  key={key}
                  color={element.color}
                  value={element.value}
                  onClick={() => {
                    // set card background color
                    setColor(element.value);
                    // set entire page background color
                    props.updateBgColor(element.value);
                  }}
                />
              );
            }
          })}

          {/* Display cards which color code not start with "#f" */}
          {changeColor.colorItem.map((element, key) => {
            if (!element.value.includes("#f")) {
              return (
                <CardItem
                  key={key}
                  color={element.color}
                  value={element.value}
                  onClick={() => {
                    // set card background color
                    setColor(element.value);
                    // set entire page background color
                    props.updateBgColor(element.value);
                  }}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
