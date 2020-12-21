import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div className="my-2">
        <i className="fa fa-check"></i>
        <p className="d-inline"> {this.props.name}</p>
      </div>
    );
  }
}
