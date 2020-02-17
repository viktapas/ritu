import React from "react";
import {IProps} from "./interface";

const Flex = (props: IProps) => {
  const {children, expand} = props;
  const classes = [
    "rt-flex rt-flex--x",
    expand ? "rt-flex-expand" : "",
  ];
  return <div 
    className={classes.join(" ")}>
    {children}
  </div>
}

export default Flex;