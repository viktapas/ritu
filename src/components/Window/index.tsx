import React from "react";
import WindowLeft from "./WindowLeft"
import WindowRight from "./WindowRight"
import "./styles.scss";
import Flex from "../../elements/Flex";

function Window(props:any) {
  return (
      <Flex expand>
        <WindowLeft/>
        <WindowRight/>
      </Flex>
  )
}

export default Window;