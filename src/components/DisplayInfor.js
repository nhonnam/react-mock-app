import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //destructuring array/object
    const { age, name } = this.props;
    console.log(this.props);
    return (
      <div>
        <div>My name is {name}</div>
        <div>I'm {age}</div>
      </div>
    );
  }
}

export default DisplayInfor;
