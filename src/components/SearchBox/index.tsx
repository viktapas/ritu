import React, { Component } from "react";
import "./styles.scss";
import {SearchBoxProps, SearchBoxState} from "./interface";

class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  constructor(props:any) {
    super(props)
    this.state = {
      value: ""
    }
  }
  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({value})
  }
  render() {
    const {value} = this.state;
    return (
      <div className="rt-searchbox">
        <input 
        placeholder={!value ? "Search your city": ""}
          className="rt-searchbox__input" 
          type="text" 
          value={value}
          onChange={this.handleChange}/>
      </div>
    )
  }
}

export default SearchBox;