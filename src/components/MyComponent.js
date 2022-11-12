import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = ["ab", "c", "c"];
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="NhonNam" age="20" />
        <hr />
        <DisplayInfor name="CauBeZuiZe" age={20} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
