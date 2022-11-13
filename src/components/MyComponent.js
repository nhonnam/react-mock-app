import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "NhonNam", age: "16" },
      { id: 2, name: "ZuiZe", age: "20" },
      { id: 3, name: "CauBe", age: "69" },
    ],
  };

  handleAddNewUser = (userObj) => {
    // let listUsersNew = this.state.listUsers;
    // listUsersNew.unshift(userObj);
    // this.setState({
    //   listUsers: listUsersNew,
    // });

    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let listUsersClone = [...this.state.listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUsersClone,
    });
  };

  //JSX
  render() {
    //DRY: don't repeat yourself
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br />
          <br />
          <DisplayInfor
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
