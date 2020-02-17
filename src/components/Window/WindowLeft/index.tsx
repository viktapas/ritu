import React from "react";
import "../styles.scss";
import SearchBox from "../../SearchBox";
import Location from "../../Location";

function WindowLeft(props:any) {
  return (
    <div className="rt-win--l">
      <section>
        <SearchBox/>
      </section>
      <section>
        <Location/>
      </section>
    </div>
  )
}

export default WindowLeft;