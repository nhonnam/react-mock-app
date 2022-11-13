import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>> call contructor: 1");
    super(props);
    this.state = {
      showListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>> call me component did mount");
    setTimeout(() => {
      document.title = "Nhon Nam Kingdom";
    }, 3000);
  }

  componentDidUpdate(prepProps, prevState, snapshot) {
    console.log(">>> call me component did update", this.props, prepProps);
    if (this.props.listUsers !== prepProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("You got 5 users");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      showListUser: !this.state.showListUser,
    });
  };

  render() {
    console.log(">>> call me render");
    //destructuring array/object
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}
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
                  <div>
                    <div>My name is {user.name}</div>
                    <div>I'm {user.age}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
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
