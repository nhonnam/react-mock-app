import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "NhonNam",
    address: "Nhon Kingdom",
    age: 26,
  };

  handleClick(event) {
    console.log(">> click me my button");
    // console.log(event.target);
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
    console.log("My name is", this.state.name);
  }

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
