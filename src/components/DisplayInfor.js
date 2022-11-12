import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //destructuring array/object
    const { listUsers } = this.props;
    console.log(listUsers);
    console.log(this.props);
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>I'm {user.age}</div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
