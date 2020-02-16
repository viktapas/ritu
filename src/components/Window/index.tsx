import React from "react";
import WindowLeft from "./WindowLeft"
import WindowRight from "./WindowRight"
import "./styles.scss";

function Window(props:any) {
  return (
    <div className={"rt-flex rt-flex--x rt-win"}>
      <WindowLeft/>
      <WindowRight/>
    </div>
  )
}

export default Window;