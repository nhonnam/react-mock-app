import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  state = {
    showListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      showListUser: !this.state.showListUser,
    });
  };

  render() {
    //destructuring array/object
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <div className="display-infor-container">
        <img src={logo} />
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.showListUser === true
              ? "Hide list of users"
              : "Show list of users"}
          </span>
        </div>
        {this.state.showListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>I'm {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
