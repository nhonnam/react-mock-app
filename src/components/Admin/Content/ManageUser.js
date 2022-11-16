import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = (props) => {
  return (
    <div className="manage-users-container">
      <div className="title">Manage user</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>table users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
