import React from "react";
import style from "./Body.module.css";
import { ArrowDown } from "react-feather";

function Body() {
  const colors = ["#FF5733", "#3CFF33", "#337AFF", "#FF33F6", "#33FFEB"];
  return (
    <div className={style.container}>
      <h2 className={style.header}>Resume Builder</h2>
      <div className={style.toolbar}>
        <div className={style.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={style.color}
            />
          ))}
        </div>
        <button className={style.button}>
          Download <ArrowDown />
        </button>
      </div>
    </div>
  );
}

export default Body;
