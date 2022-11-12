import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "NhonNam",
    address: "Nhon Kingdom",
    age: 20,
  };

  handleClick(event) {
    console.log(">> click me my button");
    // console.log("random", Math.floor(Math.random() * 100) + 1);
    this.setState({
      name: "Cau Be Vuoi Ve",
      age: Math.floor(Math.random() * 100) + 1,
    });
  }

  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event.target.value);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
