import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "NhonNam", age: "16" },
      { id: 2, name: "ZuiZe", age: "20" },
      { id: 3, name: "CauBe", age: "69" },
    ],
  };

  //JSX
  render() {
    //DRY: don't repeat yourself
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
