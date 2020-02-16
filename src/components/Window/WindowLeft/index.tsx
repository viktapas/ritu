import React from "react";
import "../styles.scss";
import SearchBox from "../../SearchBox";

function WindowLeft(props:any) {
  return (
    <div className="rt-win--l">
      <div className="rt-win--l__searchbox">
        <SearchBox/>
      </div>
    </div>
  )
}

export default WindowLeft;